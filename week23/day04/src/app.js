const express = require('express'); // here we got express framework by accessing require key
const app = express();  // now , storing all data of express inside app variable
const port = 3000;  // just deciding port number.

// app.use(express.json()); // it convert incoming request formate in json

app.get("/userInfo",(req,res)=>{
  
  const mockUsers = require("./users.json"); // we are importing our external file
  let  filteredUser = mockUsers;  // just copied all the data of mockusers inside filteredUser
  // username -> if(req.query.username && !req.query.age && !req.query.id)
  // age -> 
  // id
  // username and age
  // username and id
  // age and id
  // username adn age and id

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// username -> if(req.query.username && !req.query.age && !req.query.id)
  if (req.query.username && !req.query.age && !req.query.id){
    filteredUser=[];
    for (let i=0;i<mockUsers.length;i++){
      if (mockUsers[i].username === req.query.username) {
        filteredUser.push(mockUsers[i])

      }
    }
  }
  // age -> 
  if (!req.query.username && req.query.age && !req.query.id){
    filteredUser=[];
    for (let i=0;i<mockUsers.length;i++){
      if (mockUsers[i].age == req.query.age) {
        filteredUser.push(mockUsers[i])

      }
    }
  }
  // id
  if (!req.query.username && !req.query.age && req.query.id){
    filteredUser=[];
    for (let i=0;i<mockUsers.length;i++){
      if (mockUsers[i].id == req.query.id) {
        filteredUser.push(mockUsers[i])

      }
    }
  }
   // username and age
  if (req.query.username && req.query.age && !req.query.id){
    filteredUser=[];
    for (let i=0;i<mockUsers.length;i++){
      if (mockUsers[i].age == req.query.age && mockUsers[i].username == req.query.username) {
        filteredUser.push(mockUsers[i])

      }
    }
  }
  // username and id
  if (req.query.username && !req.query.age && req.query.id){
    filteredUser=[];
    for (let i=0;i<mockUsers.length;i++){
      if (mockUsers[i].id == req.query.id && mockUsers[i].username == req.query.username) {
        filteredUser.push(mockUsers[i])

      }
    }
  }
  // username adn age and id
  if (req.query.username && req.query.age && req.query.id){
    filteredUser=[];
    for (let i=0;i<mockUsers.length;i++){
      if (mockUsers[i].age == req.query.age && mockUsers[i].id == req.query.id && mockUsers[i].username == req.query.username) {
        filteredUser.push(mockUsers[i])

      }
    }
  }
 
 
  res.send(filteredUser);
});


app.listen(port,()=>{
  console.log('server is started now !!')
});

