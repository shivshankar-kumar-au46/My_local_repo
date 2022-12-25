const express = require('express');
const connectDB = require('./dbconfig');
const employeeRoutes = require('./routes/employeeRoutes')
const app = express();
const port = 3000;

app.use(express.json())
app.use("/employee",employeeRoutes);


app.listen(port,()=>{
    console.log('server started');
    connectDB();
})