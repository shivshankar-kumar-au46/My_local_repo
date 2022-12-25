const express = require('express');
const connectDB = require('./dbConfig');
const { route } = require('./routes/productRoute');
const app = express();
const port = 3030;

app.use(express.urlencoded({extended:true}))
app.use('/',route)









app.listen(port,()=>{
  console.log('server started');
  connectDB();
})