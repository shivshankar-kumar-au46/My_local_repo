const express = require('express')
const taskRouter = require('./routes/taskRoute')
const connectDB = require('./dbConfig')


const app = express()

//middleware - Parsing request body which is in JSON Format
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/task', taskRouter)

app.listen(8000, () => {
  console.log("Started Successfully")
  connectDB()
})