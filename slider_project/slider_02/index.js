let flag = 0;

imgSlider(flag)

function controller(x){
flag = flag + x;
imgSlider(num);
}



function imgSlider(num){
    let allSlider = document.getElementsByClassName('slider')
    allSlider[num].style.display = "block"
}