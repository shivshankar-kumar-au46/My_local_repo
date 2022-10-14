// Q-1 )
// Find largest number in a list, and second largest number, (without
// using inbuilt functions).
// eg:
// A = [1,3,4,5,8,1,2,3,4,9,6,9]
// return 9 and 8.
// Write time complexity of your code.

let arr = [1,3,4,5,8,1,2,3,4,9,6,9];
function bubleSort(a){
    for (let i = 0; i<arr.length-1; i++){
        for (let j = i + 1; j<arr.length; j++){
            if (arr[i] > arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]];
            }
        }
    }
    for (let i = 0; i<arr.length; i++){
       var maxvalue = Math.max(arr[i]); 
    }
    console.log("Largest Number in list  : ", maxvalue)
   let unique = [...new Set(arr)];
   for (let i = unique.length - 2; i>0; i--){
       if (unique[i] != unique.length - 1){
           return unique[i]
       }
   }
}
let res = bubleSort(arr)
console.log("Second largest Number in list  : ",res);

// Time complexity of above code is : O(n)^3.


//Q-2) https://leetcode.com/problems/check-if-n-and-its-double-exist/

var checkIfExist = function(arr) {
    const record = new Set()
 for (const num of arr) {
     const half = num / 2 
     const double = num * 2
     if (record.has(half) || record.has(double))
         return true
     record.add(num)
 }
 return false
};




// other


let arr = [10,2,5,3];
let n = 4;
function isExist(arr){
    let n = arr.length;
    let i = 0;
    let j = n-1;
    while (i<j){
    if (arr[i] === 2*arr[j] || 2*arr[i] === arr[j]){
      return true;  
    }else {
       j--; 
    }
    //i++;
    if (arr[i] === arr[j]){
        return false;
    }
    
}

}
console.log(isExist(arr))





