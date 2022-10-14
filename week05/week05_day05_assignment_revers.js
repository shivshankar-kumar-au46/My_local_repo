// Q-1) Convert the below function statement to function expression and call
// it with passing any numbers as the arguments and then print the output on
// console.
// function product(p1,p2,p3) {
// return p1*p2*p3;
// }


// var product = function (p1,p2,p3) {
//     return p1*p2*p3;
//     }
//     console.log(product(2,3,4))


// Q-2) Write a Javascript function expression to reverse a number.

var revers = function(p1){
    let num = p1;
    let sum = 0;
    for(let i = 0; num>0; i++){
        let temp = num%10;
            num = Math.floor(num/10);
            sum = sum*10 + temp;
    }
      return sum;
}
console.log(revers(1234));

////////////////other way ///////////////////////


var revers = p1 => {
    let num = p1;
    let sum = 0;
    for(let i = 0; num>0; i++){
        let temp = num%10;
            num = Math.floor(num/10);
            sum = sum*10 + temp
    }
      return sum;
}
console.log(revers(1248));
    