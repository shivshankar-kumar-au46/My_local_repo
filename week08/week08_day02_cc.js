// Q1. Write a program to show the data type of each element of the array .
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


//Q2. https://leetcode.com/problems/build-array-from-permutation/


nums = [0,2,1,5,3,4]
var buildArray = function(nums) {
    let ans = [];
    nums .forEach((num,index) => { ans[index] = nums[num]})
    return ans;
     
};
console.log(buildArray(nums))