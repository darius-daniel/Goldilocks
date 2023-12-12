import Crawler from './crawler.js';

const rootURL = process.argv[2] || 'www.facebook.com';

const bot1 = new Crawler();
bot1.scrapeWebPage(rootURL);
