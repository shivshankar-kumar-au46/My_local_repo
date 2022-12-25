const mongoose = require('mongoose');
const URL = "mongodb+srv://shivaverma:12345@cluster0.gxgezv9.mongodb.net/test"


    async function connectDB() {
        try{
        await mongoose.connect(URL,{dbName:"emplyDetails"})
        console.log("DB connected successful");
    } catch{
    console.log("Error connecting to DB");
}
}

module.exports = connectDB
