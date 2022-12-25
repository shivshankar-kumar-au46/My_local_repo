const mongoose = require('mongoose');

const connectionURL = "mongodb+srv://shivaverma:12345@cluster0.gxgezv9.mongodb.net/test"

async function connectDB() {
  try {
     // 1) connect
    await mongoose.connect(connectionURL,{dbName: "TodoList"})
    console.log("DB Connection Successful")
  } catch (error) {
    console.log("Error Connecting to DB")
  }
}

module.exports = connectDB