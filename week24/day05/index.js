const express = require('express');
const app = express();
const axios = require('axios').default;

app.use(express.json());




app.get('/postWithComment',(req,res)=>{
let mockUser = require('./user.json');
console.log(mockUser)
res.send(mockUser);
})

app.post('')

app.listen(6000,()=>{
    console.log('server started');
})