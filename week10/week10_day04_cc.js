//Q-1 )Binary Search
//https://leetcode.com/problems/binary-search/

function find (nums, target) {
    let left = 0;
    let right = nums.length-1;
    let res = -1;
    while (left<=right) {
        let midindex = parseInt((left + right)/2);
        if (nums[midindex] === target){
            res = midindex;
            break;
        } else if (nums[midindex]<target){
            left = midindex +1;
        }else if (nums[midindex]>target) {
            right = midindex - 1;
        }
    }
    
    return res;
    
}

let nums = [-1,0,3,5,9,12]
let target = 9
console.log(find(nums,target))

// Q - 2 ) You are given a 0-indexed integer array nums and a target
// element target.
// A target index is an index i such that nums[i] == target.
// Return a list of the target indices of nums after sorting nums in
// non-decreasing order. If there are no target indices, return an empty list.
// The returned list must be sorted in increasing order

// var targetIndices = function(nums, target) {
//     nums = nums.sort((a,b)=>a-b);
//     let arr = [];
//     let left = 0;
//     let right = nums.length-1;
//     for (let i = 0; i<=nums.length; i++){
//         let midindex = parseInt((left + right)/2);
//         if (nums[i] === target) {
//             arr.push(i);
//         }else if (nums[midindex] < target){
//             left = mmidindex +1;
//         }else if (nums[midindex] > target){
//             right = mmidindex -1;
//         }
//     }
//     return arr;
    
// }

// let nums = [1,2,5,2,3]
// let target = 2;
// console.log(targetIndices(nums,target))


