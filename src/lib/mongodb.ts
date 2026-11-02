
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please add MONGODB_URI to your .env.local file");
}

const client = new MongoClient(uri);

export const db = client.db();
export default client;
