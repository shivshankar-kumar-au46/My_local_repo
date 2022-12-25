const mongoose = require('mongoose');
const URL = "mongodb+srv://shivaverma:12345@cluster0.gxgezv9.mongodb.net/test"
mongoose.set('strictQuery', false);


async function connectDB () {
    try {
        await mongoose.connect(URL,{dbName:"productDetails"},{ useNewUrlParser: true });
        console.log('db connected');

    } catch (error) {
        console.log('Error while connecting to DB');
    }
}


module.exports = connectDB;
