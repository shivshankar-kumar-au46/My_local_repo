const mongoose = require('mongoose');
const URL = "mongodb+srv://shivaverma:12345@cluster0.gxgezv9.mongodb.net/test"

async function connectDB(){
    try {
        //1)connect
        await mongoose.connect(URL,{dbName:"movies"})
        console.log('DB connection successfully');
    } catch (error) {
        console.log('Error Connecting to DB');
    }
}


module.exports = connectDB;