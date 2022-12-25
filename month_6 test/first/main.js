
let button = document.getElementById('btn'); //
button.addEventListener('click',addColor)

function addColor(){
    let inputDiv = document.getElementById('inner');
    let newVlaue = inputDiv.value;
    for(let i=0;i<newVlaue.length;i++){
        let parentDiv = document.getElementById('parent')
        parentDiv.style.backgroundColor = newVlaue;
    }
    
}