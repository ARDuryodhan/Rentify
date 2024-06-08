const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  
  try {
    await mongoose.connect(URI);
    console.log("connection sucess to DB");
  } catch (error) {
    console.log("database connection failed",error);
    process.exit(0);
  }
};
module.exports = connectDB;
