const express = require('express')
const restroRouter = require('./routes/restroRoutes')
const connectDB = require('./dbConfig')
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRouter');


const app = express()

//middleware - Parsing request body which is in JSON Format
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.use('/restro', restroRouter)
app.use('/',authRouter)

app.listen(8000, () => {
  console.log("Started Successfully")
  connectDB()
})