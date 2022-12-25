const express = require('express'); // require is a function to include external modules which is present in seprate file, it work same as import();
console.log(express.require)
const server = express();
const cricketers = require('./cricketers');
const footballers = require('./footballers');
const serverPort = 6655;

var universalRoute = server.route('/');

universalRoute.get((request,response)=>{ //The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.
    response.send("This is universal route using get");
}) //The response object represents the HTTP response that an Express app sends when it gets an HTTP request.
.post((request,response)=>{
    response.send("This is universal route using post");
});

server.use('/',cricketers);
server.use('/',footballers);



server.listen(serverPort, (error)=>{
    if(!error)
    {
        console.log("Server is started at : "+serverPort);
    }
    else
    {
        console.log("Server encountered an error : "+error+", while starting.");
    }
});