const express = require("express");
const app = express();

app.get("/userInfo", function (req, res) {
  console.log("Backend page is started");
});

app.get("username", function (req, res) {
  console.log("Backend page is started");
});

app.get("age", function (req, res) {
  console.log("Backend page is started");
});

// app.use(express.js);
app.get("/users", function (req, res) {
  const main = require("./new.json");
  let filterUsers = main;
  if (req.query.age) {
    filterUsers = [];
    for (let i = 0; i < main.length; i++) {
      if (main[i].age == req.query.age) {
        filterUsers.push(main[i]);
      }
    }
    req.send(filterUsers);
  }
});

app.listen(8000,()=>{
    console.log('listioning at 8000 port new')
})