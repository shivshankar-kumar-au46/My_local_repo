var express = require('express');
var mongoose = require('mongoose');
var url = 'mongodb://localhost/AlienDbox';

var app = express();
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
    console.log('connected...')
})

const alianRouter = require('./route/aliens')
app.use('/aliens',alianRouter)

// app.get('/',function(req,res){
//     res.send('hello world');
// })
// app.get('/about',function(req,res){
//     res.send('welcome to my about page');
// })
// app.get('/about/:id',function(req,res){
//     const id = req.params.id
//     res.send('hey naveen' + " " + id);
// })
// app.get('/alian',function(req,res){
//     const id = req.query.id
//     res.send('hey pawan' + " " + id);
// })

app.listen(9000,()=>{
    console.log('server has started now')
});