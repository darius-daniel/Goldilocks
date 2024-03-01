import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || '127.0.0.1';
    const port = process.env.DB_PORT || 27017;
    const url = `mongodb://${host}:${port}/`;

    this.client = new MongoClient(url);
    this.connect()
      .then(() => {
        console.log('Connected to database successfully');
      })
      .catch((error) => {
        console.error(`Error connecting to database: ${error.message}`);
      });

    this.db = this.client.db('Goldilocks');
  }

  async connect() {
    await this.client.connect();
  }

  async insertOne(collection, item) {
    const insertInfo = await this.db.collection(collection).insertOne(item);

    return insertInfo;
  }

  async insertMany(collection, arrayOfItems) {
    const insertInfo = await this.db
      .collection(collection)
      .insertMany(arrayOfItems);

    return insertInfo;
  }

  async crawled(url) {
    if (await this.db.collection('visited').findOne({ url })) {
      return true;
    }
    return false;
  }

  async fetchAll() {
    const records = await this.db.collection('visited').find({}).toArray();
    return records;
  }

  async countAll() {
    const recordCount = await this.db.collection('visited').countDocuments();
    return recordCount;
  }
}

const dbClient = new DBClient();
export default dbClient;
