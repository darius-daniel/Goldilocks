import * as cheerio from 'cheerio';
import dbClient from './utils/db.js';
import Queue from './utils/queue.js';
import axios from 'axios';

class Crawler {
  fetchHTML(url) {
    // Use a axios to make an HTTP request to the given URL and retrieve the HTML content
    // Return the HTML content
  }

  extractLinks(htmlContent) {
    // Use a cheerios to extract links from the HTML content
    // Return a list of links
  }

  processData(data, url) {
    // Process the extracted data (e.g., store in a database, print to console, etc.)
  }

  webCrawler(seedURL, maxDepth) {
    // Initialize a queue to store URLs to be crawled
    // Enqueue the seed URL with depth 0

    // Loop until the queue is empty of the maximum depth is reached
    // Inside loop:
    //    Dequeue a URL and its depth
    //    Fetch the HTML contents of the current URL
    //    Parse the HTML contents to extract relevant data (links, both internal and external)
    //    Process the extracted data (store in a database)
    //    If the current depth is less than the maximum depth, enqueue links found (ensure the link has not been
    //    visited before to avoid crawling the same page multiple times).
  }

  
}

export default Crawler;
