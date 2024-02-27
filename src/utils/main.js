import Crawler from './crawler.js';
import express from 'express';
import path from 'path';
import dbClient from './db.js';
import cors from 'cors';

const app = express();
const port = 3000;

// app.use(
//   express.static(path.dirname('/home/darius/Goldilocks/dist/index.html'))
// );
app.use(express.json());
app.use(cors());

app.post('/crawler', (request, response) => {
  const rootUrl = request.body.url;
  const bot1 = new Crawler();
  bot1.webCrawler(rootUrl, 5);
});

app.get('/records', async (request, response) => {
  const records = await dbClient.fetchAll();
  response.send(records).status(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
