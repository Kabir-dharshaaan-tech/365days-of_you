const mongoose = require("mongoose");
require("dotenv").config();  // Make sure to load environment variables from .env file

const connectDB = async () => {
  try {
    // Use the MongoDB URI from the environment variable
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
