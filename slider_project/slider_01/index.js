
let flag = 0;


function controller(x){
    flag = flag + x;
    imgSlide(flag)
}

imgSlide(flag)
function imgSlide(num){
    let allSlider = document.getElementsByClassName('slider');
    for (let y of allSlider){
        y.style.display = "none"
    }
if (num === allSlider.length){
    flag = 0;
    num = 0;
}
if (num < 0){
    flag = allSlider.length-1;
    num = allSlider.length-1;
}

    allSlider[num].style.display = "block"

}



























































// var flag = 2;

// function controller(x){
//     flag = flag + x;
//     sliderImage(flag)

// }

// sliderImage(flag)

// function sliderImage(num){
//     let slides = document.getElementsByClassName("slider");
//     for (let y of slides){
//         y.style.display = "none";
//     }
//     if (num == slides.length){
//         flag = 0;
//         num = 0;
//     } 
//     if (num < 0){
//         flag = slides.length-1;
//         num = slides.length-1;
//     }
//     slides[num].style.display = "block";
// }