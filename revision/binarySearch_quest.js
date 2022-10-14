// leet code-question no. 34 (Binary search)

let nums = [5,7,8,8,8,10], target = 8

var leftSearch = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let ans = -1
    let mid = Math.floor((left+right)/2);
    while(left<=right){
        if (nums[mid] === target){
            ans = mid;
            right = mid - 1;
        } else if (nums[mid] < target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        mid = Math.floor((left+right)/2);
    }
    return ans;
};

var rightSearch = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let ans = -1
    let mid = Math.floor((left+right)/2);
    while(left<=right){
        if (nums[mid] === target){
            ans = mid;
            left = mid + 1;
        } else if (nums[mid] < target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        mid = Math.floor((left+right)/2);
    }
    return ans;
};
function totalOcc(nums,target){
    let res = [];
    let firstOcc = leftSearch(nums,target);
    let lastOcc = rightSearch(nums,target);
    let totalOccurance = Math.abs((lastOcc-firstOcc)+1);
    res.push(firstOcc);
    res.push(lastOcc)
    return res; //left most occurance and right most occurance of target
    return totalOccurance // Total occurance of target
}

console.log(totalOcc(nums,target))

