const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// afedayo
// SuZhMuZ8RRLEcMFn
// mongodb+srv://afedayo:SuZhMuZ8RRLEcMFn@cluster0.7e7jo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
