const express = require('express');
const all = require("everyday-fun");
const app = express();
console.log(all.getRandomQuote());


// app.use(express.static('public'));
// app.get('/index.html', function (req, res) {
//    res.sendFile( __dirname + "/" + "index.html" );
// })


app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

// Here is a simple example which passes two values using HTML FORM GET method. We are going to use process_get router inside server.js to handle this input.


// app.post('/',(req,res)=>{
//     res.send('hello post')
// })

// app.delete('/del_User',(req,res)=>{
//     res.send('hello delete');
// })

// app.get('/list_User',(req,res)=>{
//     res.send('hello listUser');
// })

// app.get('/ab*cd', (req, res) => {   
//     console.log("Got a GET request for /ab*cd");
//     res.send('Page Pattern Match');
//  })


var server = app.listen(8081,()=>{
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)
})