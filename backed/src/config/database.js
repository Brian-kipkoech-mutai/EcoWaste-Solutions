import mongoose from "mongoose";
import { MONGO_URI } from "./env.js";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, clientOptions);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

export default connectDB;