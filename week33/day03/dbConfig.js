const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connectionURL =
  "mongodb+srv://NitishKumar:9001485001@nitishkumar.74uilud.mongodb.net/?retryWrites=true&w=majority";

async function connectDB() {
  try {
    // 1) connect
    await mongoose.connect(connectionURL, { dbName: "userData" });
    console.log("DB Connection Successful");
  } catch (error) {
    console.log("Error Connecting to DB");
  }
}

module.exports = connectDB;