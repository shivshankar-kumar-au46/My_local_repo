// Q-1) Write a JavaScript program to list the properties of a JavaScript
// object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output:
// name,sclass,rollno

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    
    let studentKeys = Object.keys(student)
    
    for ( let key of studentKeys) {
        console.log(key)
    }



//Q-2) Given an array, convert it into an object. (index will be the key).


const arr = [5,22,31,40,57];

function arrToObject (arr) {
    let obj = {};
    for ( let i = 0; i < arr.length; i++){
        obj[i] = arr[i];
    }
    return obj;
}
console.log(arrToObject(arr))


// Q-3) Write a function to create an object, that calculates the
// number of times each element occurs in the following array.
// (5 marks) (Easy)


const inputArr = ['Orange','Orange','banana','apple','apple','banana',
'apple','apple','apple','apple','Orange','Orange','Orange','Orange','banana']

// const filteredArr = inputArr.filter(function (word) {
// return word [0] === 'O';
// });
// console.log('Orange',filteredArr.length)

// const filteredArray = inputArr.filter(function (word) {
//     return word[0] === 'a';
// })
// console.log('apple', filteredArray.length);

// const filterArray = inputArr.filter(function (word) {
//     return word[0] === 'b';
// });
// console.log('banana', filterArray.length);











