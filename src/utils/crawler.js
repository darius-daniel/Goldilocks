import * as cheerio from 'cheerio';
import axios from 'axios';
import dbClient from './db.js';
import Queue from './queue.js';

class Crawler {
  constructor() {
    this.stopSignal = false;
  }

  isRelativeURL(url) {
    return url.startsWith('/') || url.startsWith('#');
  }

  parseURL(url, baseURL) {
    if (url === undefined) {
      return new Error(`url is undefined`);
    }

    if (!baseURL && this.isRelativeURL(url) === true) {
      return new Error(
        `baseURL is undefined and ${url} is not an absolute url`
      );
    } else if (!baseURL && this.isRelativeURL(url) === false) {
      baseURL = url;
    }

    if (baseURL.endsWith('/')) {
      baseURL = baseURL.slice(0, -1);
    }

    if (url.startsWith('/')) {
      url = `http://${baseURL}${url}`;
    } else if (url.startsWith('#')) {
      if (baseURL.endsWith('/')) {
        baseURL = baseURL.slice(0, -1);
      }

      url = `http://${baseURL}/${url}`;
    } else if (
      url.startsWith('http://') === false &&
      url.startsWith('https://') === false
    ) {
      url = `http://${url}`;
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

    while (queue.size() > 0 && this.stopSignal === false) {
      let [url, depth] = queue.dequeue();
      if (url instanceof Error === false) {
        try {
          const response = await axios.get(url);

          const $ = cheerio.load(response.data);
          const $a = $('body a');

          await dbClient.insertOne('visited', {
            url,
            label: $('title').text(),
          });
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
        } catch (error) {
          console.error(`Error: ${error.message}`);
        }
      }
    }
    console.log('Stopped crawling');
  }
}

export default Crawler;
