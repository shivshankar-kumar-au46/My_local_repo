// Q-1) Write a function to take input from the user and feed it into an array.
// Take input (in this question only) from the user for length of the array also.

let storeArray = function () {
    var arr = [];
    var size = parseInt(prompt('Enter array size'));

    for (let i = 0; i < size; i++){
        arr[i] = parseInt(prompt('Enter rray element' + (i +1)))
    }
    return (arr);
}
console.log(storeArray())


// Q2. Write a program to show the data type of each element of the array .
// Input: [8,5,5,6,”7”,8]
// Output:
// 8 Number
// 5 Number
// 5 Number
// 6 Number
// 7 String
// 8 Number

let arr1 = [8,5,5,6,"7",8];

for (let i = 0; i < arr1.length; i++) {

    console.log(arr1[i], typeof(arr1[i]));
}

// Q3. Write a program to remove the last element from an array, and put a
// string at the end of the array.
// Input: Any list, let’s say
// [1,2,3,4,5,6,7,8,9]
// Output:
// [1,2,3,4,5,6,7,8,”hello”]

let arr2 = [1,2,3,4,5,6,7,8,9];
arr2.pop();
arr2.push("Hello");
console.log(arr2);

