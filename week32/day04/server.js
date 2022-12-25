// require("dotenv").config();
const express = require('express');
// const { get } = require('http');
const hbs = require('hbs');
const mongoose = require('mongoose');
const connectDB = require('./dbConfig')
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/formRoutes')
const port = 3000;

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use("/static", express.static("public"))

app.use("/",routes)


app.set('view engine','hbs')
app.set('views','views')
hbs.registerPartials("views/partials")


//db connection


// mongoose.connect("mongodb+srv://shivaverma:12345@cluster0.gxgezv9.mongodb.net/test",()=>{
//     console.log('db connected');
// })

// const uri = process.env.;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })











app.listen(port,() => {
    console.log('server started');
    connectDB();
})