
const button = document.getElementById("btn");
const img = document.getElementById("bulb");
button.addEventListener("click",toogle);

function toogle(e){
    if (button.textContent.includes("On")){
        img.src = "./img/on.jpg";
        button.textContent = "Turn Off";
    } else {
        img.src = "./img/off.jpg";
        button.textContent = "Turn On"
    }
}

