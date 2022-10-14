
const pushbtn = document.getElementById("pushbtn");
pushbtn.addEventListener('click',onSubmit);
let array = [];
function onSubmit () {
    const element = document.getElementById('element');
    const newEme = element.value;
   
    if (newEme <= 0){
        alert("enter valid number")
    }else if (isNaN(Number(newEme))){
        alert("enter any input as Number")
    } else {
       array.push(newEme)
        document.getElementById('element').innerHTML = array;
        // console.log(array)
    }
    document.getElementById('element').value = "";
const results = document.querySelector("#results");
results.value = array;
}

const popbtn = document.getElementById("popbtn");
popbtn.addEventListener('click', newArray)

function newArray (e){
    currentTarget.sibling;
    const newEme = element.value;
    document.getElementById('results').innerHTML = "heeloolfsl"

}

