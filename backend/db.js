const mongoose = require("mongoose");

const mongoURI =
  "mongodb://0.0.0.0:27017/easynote?readPreference=primary&directConnection=true&ssl=false";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;
