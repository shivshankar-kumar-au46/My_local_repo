// Q-1 )
// Write steps in heapify/percolate down method, and write time complexity
// and space complexity analysis.


// Heapify contains the following steps
// 1.-- We compare the values of indexes of array by thinking the concept of tree and their left and right child.
// 2.--Then we take the value of that index which have maximum value of these two
// in a varible suppose temp
// 3.-- Then we compare the root value with the temp variable value.
// 4.-- if temp variable value is greater then hypothetical root value then
// we simply interchange the value of root and temp variable
// 5.--Then we heapify for that child node whose value have changed with the root node if it is smaller than its child, and so on till leaf node.

// Time complexity for heapify is --O(nlog n).
// Space complexity is O(1) when insert a new element.
// When we only interchyange then there is no extra space required.

//Example
let arr=[20,24,15,22,23,17,18];

function heapify(arr,i){
    // left child index
    let l=2*i+1;
    
    //right child Index
    let r=2*i+2;
    let tempIndex;
    if(l>=arr.length){
        return;
    }else if(l==arr.length-1){
        tempIndex=l;
    }else{
        tempIndex=arr[l]>arr[r]?l:r;
    }
    
    if(arr[i]<arr[tempIndex]){
        // swapping
        let temp=arr[i];
        arr[i]=arr[tempIndex];
        arr[tempIndex]=temp;
        
        // for changed  child node index
        heapify(arr,tempIndex);
    }

}
// function calling
heapify(arr,0);
console.log(arr);

//Q - 2 ) https://leetcode.com/problems/last-stone-weight/
 
var lastStoneWeight = function (stones) {
    // heapify function
    function heapify(arr, i) {
      // left child index
      let l = 2 * i + 1;
  
      //right child Index
      let r = 2 * i + 2;
      let tempIndex;
      if (l >= arr.length) {
        return;
      } else if (l == arr.length - 1) {
        tempIndex = l;
      } else {
        tempIndex = arr[l] > arr[r] ? l : r;
      }
  
      if (arr[i] < arr[tempIndex]) {
        // swapping
        let temp = arr[i];
        arr[i] = arr[tempIndex];
        arr[tempIndex] = temp;
  
        // for changed  child node index
        heapify(arr, tempIndex);
      }
    }
  
    // function to build maxheap
    function mxhp(stones) {
      for (let i = Math.floor(stones.length / 2) - 1; i >= 0; i--) {
        heapify(stones, i);
      }
    }
    mxhp(stones);
  
    let h;
    while (stones.length != 0 && stones.length != 1) {
      if (stones.length > 2) {
        h = stones[1] >= stones[2] ? 1 : 2;
      } else {
        h = 1;
      }
      if (stones[0] == stones[h]) {
        stones.splice(h, 1);
        stones.shift();
      } else {
        stones[h] = stones[0] - stones[h];
        stones.shift();
      }
      mxhp(stones);
    }
    let result = stones.length > 0 ? stones[0] : 0;
    return result;
  };


  // Q-1 ) https://leetcode.com/problems/kth-largest-element-in-an-array
  var findKthLargest = function(nums, k) {
    function heapify(arr,i,n){
        let l=2*i+1;
        let r=2*i+2;
       let tempIndex;
      if(l>=n){
          return;
      }else if(l==n-1){
          tempIndex=l;
      }else{
          tempIndex=arr[l]>arr[r]?l:r;
      }
       
       if(arr[i]<arr[tempIndex]){
           arr[i]=arr[i]+arr[tempIndex];
           arr[tempIndex]=arr[i]-arr[tempIndex];
           arr[i]=arr[i]-arr[tempIndex];
       }
       
       heapify(arr,tempIndex,n);
   }
    
    function buildMaxHeap(arr,n){
        for(let i=Math.floor(arr.length/2)-1;i>=0;i--){
            heapify(arr,i,n);
        }
    }
    
    
    function heapSort(arr,n){
        buildMaxHeap(arr,n);
        for(let i=n-1;i>n-1-k;i--){
            let temp=arr[0];
            arr[0]=arr[i];
            arr[i]=temp;
            heapify(arr,0,i);
        }
    }
    
    heapSort(nums,nums.length);
    return nums[nums.length-k];
};