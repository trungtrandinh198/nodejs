import { MongoClient, ServerApiVersion } from 'mongodb';
import { env } from './environment.js';

let trellloDatabaseInstance = null;

const mongoClient = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const CONNECT_DB = async () => {
  await mongoClient.connect();
  trellloDatabaseInstance = mongoClient.db(env.DATABASE_NAME);
}

export const GET_DB = () => {
  if (!trellloDatabaseInstance) {
    throw new Error('Database not connected! Please call CONNECT_DB first.');
  }
  return trellloDatabaseInstance;
}

export const CLOSE_DB = async () => {
  console.log('Closing database connection...');
  await mongoClient.close();
  trellloDatabaseInstance = null;
}