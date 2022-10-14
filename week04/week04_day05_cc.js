//Q-1) Write a program to find the sum of the first n natural numbers, take the
//value of n by yourself?

// var num = 10;
// let sum = 0;
// for (i = 0; i <= num; i++){
//     sum+=i;
// }
// console.log(sum);

// Q-2) Ask for a number input from the user, and display a message whether
// that number is prime or not.
// Ex: 1 is not a prime number | 17 is a prime number
// Note: Also handle edge cases and bad inputs appropriately

// const num = 23;
// cond = true;

// if (num === 1) {
//     console.log("nither prime nor composite");
// }
// else if (num>1) {
    
//     for (let i = 2; i<num; i++){
//         if (num%i == 0) {
//             cond = false;
//             break;
//         }
//     }
//         if (cond) {
//             console.log(num,'is a prime number');
//         } else {
//             console.log(num,'is not a prime number');
//         }
    
    
// } else {
//     console.log(num,'is not a prime number');
// }

//***********other way********** */

// var number = 2;
// if (number == 1) {
//     console.log(number,'is neither prime nor composite number');
// } else if (number < 1){
//     console.log(number,'is not a prime number');
// } else {
// for (var i = 2; i < number; i++){
//     if (number % i == 0){
//         var str = `${number} is not a prime number`
//         break;
//     } else {
//               var str = `${number}  is a prime number`
//     }
// }
// console.log(str);
// }



//Q-3) Write a program to take a number and check if it is palindrome or not?

// function reversedNum(num){
//     return (
//         parseFloat(num.toString().split('').reverse().join(''))*Math.sign(num))
// }
// let num = 3663;
// let str = reversedNum(num);
// if(str==num){
//     console.log(num,"is a palindrome number");
// }else{
//     console.log(num,"is not a palindrome number");
// }


