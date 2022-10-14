//Q-1) Write a program to print truth table of OR logical operator
//(15 marks) 

var a = 5>3;  // true
var b = 4>6; // false
var c = a || b;
console.log(c);

var a = 5!=3;  // true
var b = 4<6; // true
var c = a || b;
console.log(c);

var a = 5==3;  // false
var b = 4<6; // true
var c = a || b;
console.log(c);

var a = 5<3;  // false
var b = 4>6; // false
var c = a || b;
console.log(c);