import Crawler from './crawler.js';

const rootURL = process.argv[2] || 'www.scraping-bot.io';

const bot1 = new Crawler();
bot1.webCrawler(rootURL, 5);
