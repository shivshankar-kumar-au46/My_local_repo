const express = require("express");

const app = express();

const fs = require("file-system");

app.use(express.js());

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.post("/api/users", function (req, res) {
  const newUser = req.body;

  const currentUser = require(".main.js");

  currentUser.push(newUser);

  fs.writeFile("./main.js", JSON.stringify(currentUser));
});

app.use(express.js);
app.get("/api/users", function (req, res) {
  const main = require("./users-service/main.js");
  res.send(main);
});

app.listen(8000);