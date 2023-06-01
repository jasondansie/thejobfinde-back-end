const mongoose = require('mongoose');

require('dotenv').config();


const options = {
  authSource: "admin",
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASS,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO1_URI, options);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
    }
  };

module.exports = connectDB;