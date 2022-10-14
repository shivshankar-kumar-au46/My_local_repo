// Q-1 ) Recursive implementation of atoi() function:(5 marks)
// Atoi() function converts a string into an integer.
// eg:
// st = “1234” is a string.
// if we perform,
// st + 1
// this results in error since “st” is a string and 1 is an integer, and,
// st + “1”
// this will append 1 into 1234. Giving us 12341.

function myAtoi(str) {
    if (str.length === 1) {
      return Number(str);
    } else {
      return (
        myAtoi(str.substring(0, str.length -1)) * 10 + myAtoi(str[str.length - 1])
      );
  }
}
let str = "1234";
let results = myAtoi(str);
console.log(results + 1);




//   Q-2 ) Write a function that prints digits of a number from left to right , using
// recursion:(5 marks)
// Sample Input:
// 1234567
// Sample output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7

function sum(n) {
    if (n < 1) {
      return;
    } else {
      sum(n - 1);
      console.log(n);
    }
  }
  sum(7);

//   Q-3 ) Reverse a string using recursion:(5 marks)
// If we have a string, write a function that prints reverse of that string, using
// recursion.
// Sample Input:
// ABCD
// Sample Output:
// DCBA

let reverse = (str) => {
    if (str.length === 0) return '';
    return reverse (str.slice(1)) + str[0];
}

console.log(reverse("ABCD"))
