const express = require('express');
const app = express();
const path = require("path")

app.use(express.static(__dirname + '/server'));
app.use(express.json());

app.get("/",function(req,res){
    const profile = require("./server/user.html")
    res.sendFile(profile)
})
app.get("/about",function(req,res){
    res.sendFile("/about.html", {
        root: path.join(__dirname, "server"),
    })
});
app.get("/contact",function(req,res){
    res.sendFile("/contact.html", {
        root : path.join(__dirname,"server"),
    }
        )
});

app.listen(8000,()=>{
    console.log('server is started...')
});