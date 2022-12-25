const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;
const fileUpload = require('express-fileupload')

app.listen(port,()=>{
    console.log('server started');
})