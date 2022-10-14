
// Q-1) Two Sum
// Given an array of integers numbers and an integer target, return indices of
// the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you
// may not use the same element twice.
// You can return the answer in any order.
// https://leetcode.com/problems/two-sum/


let nums = [2,7,11,15], target = 9;

var twoSum = function(nums, target) {
    for (let i = 0; i<nums.length; i++){
        for (let j= i+1; j<nums.length; j++){
      if (nums[i] + nums[j] === target){
                  return [i, j];
            }
        }
     }
    }
    console.log(twoSum(nums, target))

//     Q-2) Maximum Number of Words Found in Sentences
// A sentence is a list of words that are separated by a single space with no
// leading or trailing spaces.
// You are given an array of strings sentences, where each sentences[i]
// represents a single sentence.
// Return the maximum number of words that appear in a single sentence.
// https://leetcode.com/problems/maximum-number-of-words-found-in-senten
// ces/

let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

var mostWordsFound = function(sentences) {
    let count = 0;
     for (let i =0; i < sentences.length; i++) {
         let words = sentences[i].split(" ");
         (words.length > count) ? count = words.length : count = count;
     }
     return count;
    }

    console.log(mostWordsFound(sentences))


    //Q-3) https://leetcode.com/problems/build-array-from-permutation/

    nums = [0,2,1,5,3,4]
    var buildArray = function(nums) {
        let ans = [];
        nums .forEach((num,index) => { ans[index] = nums[num]})
        return ans;
         
    };
    console.log(buildArray(nums))



