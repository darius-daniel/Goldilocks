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

let bot = new Crawler();

app.post('/crawler', (request, response) => {
  bot.webCrawler(request.body.url, 5);
});

app.post('/stop', (request, response) => {
  bot.isRunning = request.body.isRunning;
});

app.get('/status', (request, response) => {
  response.status(200).send(bot.isRunning);
});

app.get('/records', async (request, response) => {
  const records = await dbClient.fetchAll();
  response.send(records).status(200);
});

app.get('/count', async (request, response) => {
  const countAll = await dbClient.countAll();
  response.send(countAll).status(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
