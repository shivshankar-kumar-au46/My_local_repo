const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const { request, response } = require('express');
const path = require('path')
const app = express();
const serverPort = 6677;


app.set('views', './views');
app.set('view engine', 'ejs');

app.use(fileUpload());
app.use(bodyParser.json())


app.get('/upload',(request,response)=>{
    response.render('loginForm')
})



app.post('/upload', function(request, response){
    // console.log(request.files);
    if(request.files && Object.keys(request.files).length != 0)
    {
        const uploadFile = request.files.uploadFile;
        // console.log(uploadFile);
        const uploadPath = "./uploads/" + uploadFile.name;
        // console.log(uploadPath)
        uploadFile.mv(uploadPath, function(error){
            if(error)
            {
                console.log(error);
                response.status(500);
                response.send("Failed to upload File because : "+error);
            }
            else
            {
                console.log("File uploaded successfully to : " +uploadPath);
                response.status(200);
                response.send('file uploaded successfully');

            }
        });
    } else
    {
        console.log("No file uploaded!!!");
        response.status(500);
        response.send("No Files Uploaded.");
    }
});

app.listen(serverPort,(error)=>{
    console.log('server started');
})