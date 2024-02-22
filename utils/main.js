import Crawler from './crawler.js';
import express from 'express';
import path from 'path';
import dbClient from './db.js';

const app = express();
const port = 3000;

app.use(
  express.static(path.dirname('/home/darius/Goldilocks/dist/index.html'))
);
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
