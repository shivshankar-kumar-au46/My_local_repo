//*************Binary Search******************//
// Binary search apply on sorted array only
let arr = [1,2,3,4,5,6,7];
let target = 7;
//create left
let left = 0;
//create right
let right = arr.length-1;
function search(arr,target){
    while(left<=right){
//create mid
    let mid = Math.floor((left+right)/2);
//compare with mid if mid is equal to target then print mid index
    if (arr[mid]===target){
        console.log(mid)
        break;
//if mid is greater than target then update right with mid-1        
    }else if(arr[mid]>target){
        right = mid-1;
//if mid is less than target then update left with mid + 1        
    }else if (arr[mid]<target){
        left = mid+1;
    }
}
// after while loop check if left greater than right that is ele is not present in that array so, it return -1;
if (left>right){
    console.log(-1)
}
}
search(arr,target)