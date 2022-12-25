const express = require("express");
const app = express();
const port = 8081;
const randomColor = require("randomcolor");
const color = randomColor({
  count: 20,
  luminosity: "light",
  hue: "blue",
});
const all = require("everyday-fun");
const date = new Date();

//Creating routes
app.get("/", (req, res) => {
  res.send("Welcome to Home Routes with get request");
});

app.get("/randomColor", (req, res) => {
  let randomColor = color;
  res.send(randomColor);
});

app.get("/currentDate", (req, res) => {
  let currentDate = date.toString(" ");
  res.send(currentDate);
});

app.get("/joke", (req, res) => {
  let joke = all.getRandomJoke();
  res.send(joke);
});

app.get("/quote", (req, res) => {
  let quote = all.getRandomQuote();
  res.send(quote);
});

app.get("/riddle", (req, res) => {
  let riddle = all.getRandomRiddle();
  res.send(riddle);
});

app.listen(port, (error) => {
  if (!error) console.log("server is started at port:" + " " + port);
  else
    console.log("Error occured while communicating with port :" + " " + port);
});
