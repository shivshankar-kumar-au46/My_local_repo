const express = require('express');
const app = express();
let PORT = 3000;


app.get('/',(resolve,reject)=>{
    resolve.send('welcome to home');
})

app.

app.listen(PORT,()=>{
    console.log('listning port at 3000');
})