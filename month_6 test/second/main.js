let button = document.getElementById('btn')
let newQuote = document.getElementById('newQuote')
let authorNew = document.getElementById('authorNew')
button.addEventListener('click',function(){
fetch("https://type.fit/api/quotes")
.then((res) => res.json())
.then((data) => {
const indx = Math.floor(Math.random() * data.length);
console.log(data)
const allData = data[indx].text;
const auth = data[indx].author;
  if (auth == null) {
    author = "Anonymous";
  }
newQuote.innerHTML = allData;
authorNew.innerHTML = "~" +" " + auth;




});
})