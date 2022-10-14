//Q-1 ) https://leetcode.com/problems/reverse-string/

var reverseString = function(s) {
    let left = 0;
       let right = s.length-1;
       while(left < right) {
       [s[left],s[right]] = [s[right],s[left]]    
       left++;
       right--;
       }
       return s;
   };

   
   //Q - 2 ) https://leetcode.com/problems/maximum-ascending-subarray-sum/

   var maxAscendingSum = function(nums) {
    let sum = nums[0]
    let max = sum
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] <= nums[i - 1]) {
        sum = 0
      }
      sum += nums[i]
      max = Math.max(max, sum)
    }
    return max
  };

