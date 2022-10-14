// Q1. Write a program to reverse a number using array methods(like- split
//     and reverse)

function reverse (num) {

let numArr = String(num).split("").reverse().join("")
return Number(numArr);

}
console.log(reverse(1234));


// Q2. Write a function to take all the elements of an array containing a
// mixture of numbers and strings, and concatenate all the string elements
// and return the concatenated string. Use rest and spread operators for
// passing and receiving elements of the array.
// Ex - Input - arr = [1, 'John', 2, 3, 'is', 'playing', 4, 'cricket', 5, 6]
// Output - "John is playing cricket"

// let arr = [1, 'John', 2, 3, 'is', 'playing', 4, 'cricket', 5, 6]
// // Output - "John is playing cricket".

let findString = (...arr) => {
    
    let extractedString = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
        extractedString.push(arr[i]);
        } 
    }
        return (extractedString.join(" "));
}
let inputArr = [1, 'John', 2, 3, 'is', 'playing', 4, 'cricket', 5, 6]
console.log(findString(...inputArr))







    