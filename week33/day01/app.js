
const express = require('express');
const  movieRouter  = require('./routes/movieRouter')
const connectDB = require('./dbConfig')
const app = express();
const port = 8080;

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/movie",movieRouter);














app.listen(port,()=>{
    console.log('server started');
    connectDB()
})