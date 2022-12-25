const { urlencoded } = require('body-parser');
const bodyParser = require('body-parser');
const express = require('express');
const sererPort = 3000;
const itemsRoter = require("./itmes")
const app = express();

app.use(express.json());
app.use('/items',itemsRoter);
app.use(bodyParser.urlencoded({extended:true}))

app.route('/').get((req,res)=>{
    res.status(200)
    res.send('got a get request on universal route');
}).post((req,res)=>{
    res.status(200)
    res.send('got a post request on univarsal route')
})












app.listen(sererPort,(error)=>{
    if(!error){
        console.log('server started successfully');
    }else{
        console.log('error occured while connecting');
    }
})