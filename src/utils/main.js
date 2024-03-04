import Crawler from './crawler.js';
import express from 'express';
// import path from 'path';
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
  const bot = new Crawler();
  bot.webCrawler(rootUrl, 5);

  app.post('/stop', (request, response) => {
    const stopSignal = request.body.stop;
    bot.stopSignal = stopSignal;
  });
});

app.get('/records', async (request, response) => {
  const records = await dbClient.fetchAll();
  response.send(records).status(200);
});

app.get('/count', async (request, response) => {
  const countAll = await dbClient.countAll();
  response.send(countAll);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
