const mongoose = require("mongoose");
let DB_URL = process.env.DB_URL;// here we are using the MongoDB Url we defined in our ENV file

module.exports = async function connection() {
  try {
    await mongoose.connect(
      DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        autoIndex: true,
      },
      (error) => {
        if (error) return new Error("Failed to connect to database");
        console.log("connected");
      }
    );
  } catch (error) {
    console.log(error);
  }
};