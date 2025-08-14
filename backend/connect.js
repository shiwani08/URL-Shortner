import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
if (!MONGO_URL) {
  throw new Error("Please define the MONGO_URL environment variable");
}

async function connectDB() {
  return mongoose.connect(MONGO_URL); // returns a promise
}

export default connectDB;
