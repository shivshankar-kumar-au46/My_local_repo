let next = document.getElementById("next");
let queCount = 1;
var dataArr;
let ans = [];
async function data() {
  let data = await fetch("https://opentdb.com/api.php?amount=10");
  let dataJSON = await data.json();
  dataArr = dataJSON.results;
  for (let i = 0; i < dataArr.length; i++) {
    ans.push(dataArr.correct_answer);
  }
  document.getElementById("que").innerHTML = "Q:-" + " " + dataArr[0].question;
  let ansOpt = [dataArr[0].correct_answer, ...dataArr[0].incorrect_answers];
  let opt = document.getElementsByTagName("span");
  for (let i = 0; i < opt.length; i++) {
    opt[i].innerHTML = ansOpt[i];
  }
}
document.addEventListener("load", data());
let nextbtn = document.getElementById("next");
nextbtn.addEventListener("click", function () {
  document.getElementById("que").innerHTML =
    "Q:-" + " " + dataArr[queCount].question;
  let ansOpt = [
    dataArr[queCount].correct_answer,
    ...dataArr[queCount].incorrect_answers,
  ];
  let opt = document.getElementsByTagName("span");
  for (let i = 0; i < opt.length; i++) {
    opt[i].innerHTML = ansOpt[i];
  }
  queCount++;
});
let backbtn = document.getElementById("back");
backbtn.addEventListener("click", function () {
  --queCount;
  console.log(queCount);
  document.getElementById("que").innerHTML =
    "Q:-" + " " + dataArr[queCount].question;
  let ansOpt = [
    dataArr[queCount].correct_answer,
    ...dataArr[queCount].incorrect_answers,
  ];
  let opt = document.getElementsByTagName("span");
  for (let i = 0; i < opt.length; i++) {
    opt[i].innerHTML = ansOpt[i];
  }
});