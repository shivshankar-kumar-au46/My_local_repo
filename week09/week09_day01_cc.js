// Q-1) Write a program to create a copy of an object, like,
// obj2 = obj1
// edit any property of obj2, and see if the change is reflected to obj1
// or not?
// Explain your observation.

// let obj1 = {
//     firstName: 'shiv',
//     lastNmae: 'kumar',
//     age: '27'
// }

// let obj2 = obj1;

// obj2.age = '26';

// console.log(obj1);
// console.log(obj2);

// Explanation of obsrvation.

//change is reflected to obj1 as we change the properties of obj2 in above program.

// One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference” as given in above example, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

//A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

//When an object variable is copied, the reference is copied, but the object itself is not duplicated.


// Write a program to pass spread operator as argument and
// rest operator as parameter of a function.

// function sum(...nums) {
//     return nums.reduce((result, nums) => {
//     return result + nums;
//     });
//     }
    //let inputNums = [1,2,3,4,5,6]
    //console.log(sum(...inputNums));
    // expected output: 21

//  arr = [1,2,3,4,5,6];

//  arr4 = arr.reduce((result, nums) => {
//     return result*nums;
//  })
//  console.log(arr4);


 function sum (...nums){
    return nums;
 }
 //let num3 = [1,2,3,4,5,8];
 //console.log(...num3)
 console.log(1,3,4,5,6,7)

 function printSum (...name) {
    console.log(name)
 }
 let names = ['shiv','rahul','vikram','sonu']
 printSum(...names)

 let obj = {
    name: 'shiv',
 }
    





