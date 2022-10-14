//Q-1 ) https://leetcode.com/problems/next-greater-element-i/


var nextGreaterElement = function(nums1, nums2) {
    let result = [];
           for (let i = 0; i<nums1.length; i++){
               let val = nums1[i];
               let j = nums2.indexOf(nums1[i]);
                while(nums2[j]<=val && j < nums2.length){
               j++;
           }
                if (nums2[j] > val){
               result.push(nums2[j]);
           } else {
               result.push(-1);
            }
                
           }
           return result;
                
   };