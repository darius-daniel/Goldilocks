import * as cheerio from 'cheerio';
import dbClient from './utils/db.js';
import Queue from './utils/queue.js';
import axios from 'axios';

class Crawler {
  parseURL(url, baseURL) {
    if (baseURL === undefined) {
      baseURL = url;
    }

    if (baseURL.endsWith('/')) {
      baseURL = baseURL.slice(0, -1);
    }

    if (url) {
      if (url.startsWith('/')) {
        url = `http://${baseURL}${url}`;
      } else if (url.startsWith('#')) {
        url = `http://${baseURL}/${url}`;
      } else if (
        url.startsWith('http://') === false &&
        url.startsWith('https://') === false
      ) {
        url = `http://${url}`;
      } 
    }

   try {
      return new URL(url).href;
    } catch (error) {
      return error;
    }
  }

  processData(data, url) {
    // Process the extracted data (e.g., store in a database, print to console, etc.)
  }

  async webCrawler(seedURL, maxDepth) {
    const queue = new Queue();
    const visited = new Set();
  
    
    seedURL = this.parseURL(seedURL, seedURL);
    if (seedURL instanceof Error === false) {
      queue.enqueue([seedURL, 0]);
    }
    
    while (queue.size() > 0) {
      let [url, depth] = queue.dequeue();
      if (url instanceof Error === false) {
        try {
          const response = await axios.get(url);
  
          const $ = cheerio.load(response.data);
          const $a = $('body a');

          await dbClient.insertOne('visited', { url, 'label': $('title').text() });
          visited.add(url);

          if (depth <= maxDepth) {
            $a.each(async (i, element) => {
              const link = $(element).attr('href');
              const parsedLink = this.parseURL(link, url);

              if (!visited.has(parsedLink) && !(parsedLink instanceof Error)) {
                const linkObj = new URL(parsedLink);
                if (linkObj.hostname.endsWith(url)) {
                  queue.enqueue([parsedLink, depth + 1]);
                } else {
                  queue.enqueue([parsedLink, 0]);
                }
              }
            });
          }
        } catch(error) {
          console.error(`Error: ${error.message}`);
        }
      }
    }
  }
}

export default Crawler;
