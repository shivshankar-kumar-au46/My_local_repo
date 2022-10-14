//Q-1) Write a program to find the biggest of 3 variables?


var num1 = 4;
var num2 = 5;
var num3 = 6;
if(num1>=num2 && num1>=num3){
    console.log(num1,"is the gretest number");
}else if(num2>=num1 && num2>=num3){
    console.log(num2,"is the greatest number");
}else{
    console.log(num3,"is the greatest number");
}