import Crawler from './crawler.js';

const rootURL = process.argv[2] || 'www.yahoo.com';

const bot1 = new Crawler();
bot1.webCrawler(rootURL, 5);
