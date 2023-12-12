import * as cheerio from 'cheerio';
import dbClient from './utils/db.js';
import axios from 'axios';

class Crawler {
  constructor() {
    this.visitedLinks = dbClient.db.collection('visited');
    this.pendingLinks = dbClient.db.collection('pending');
  }

  
}

export default Crawler;
