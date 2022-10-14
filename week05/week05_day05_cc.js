// Q.1 Write a function to take a number as a parameter and return the square of the number.

function sqr (a) {
    return a*a
}
let input = 4;
console.log('the squre of',input,'is :',sqr(input));

// Q.2 Write a function to take 3 parameters and return the average of them.

function avg (p1,p2,p3) {
    let avrg = (p1+p2+p3)/3;
    return avrg
}
console.log('the average of given number is :',avg(2,8,5));