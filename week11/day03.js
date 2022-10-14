// Q-1 ) Select the appropriate code that performs selection sort.

// a) for(j = 0;j<n;j++){
// min = j
// for(k = j+1;k<n;k++){
// if(arr[k] < arr[min])
// min = k
// }
// temp = arr[min]
// arr[min] = arr[j]
// arr[j] = temp
// }

// b) for(j = 0;j<n;j++){
// min = j
// for(k = j+1;k<n+1;k++){
// if(arr[k] < arr[min])
// min = k
// }
// temp = arr[min]
// arr[min] = arr[j]
// arr[j] = temp
// }

// c) for(j = 0;j<n;j++){
//     min = j
//     for(k = j+1;k<n+1;k++){
//     if(arr[k] > arr[min])
//     min = k
//     }
//     temp = arr[min]
//     arr[min] = arr[j]
//     arr[j] = temp
//     }   

// d) for(j = 0;j<n;j++){
//     min = j
//     for(k = j+1;k<n;k++){
//     if(arr[k] > arr[min])
//     min = k
//     }
//     temp = arr[min]
//     arr[min] = arr[j]
//     arr[j] = temp
//     }

// Answer of question 1. : 
//the appropriate code that performs selection sort is option a)

 for(j = 0;j<n;j++){
    min = j
    for(k = j+1;k<n;k++){
    if(arr[k] < arr[min])
    min = k
    }
    temp = arr[min]
    arr[min] = arr[j]
    arr[j] = temp
    }

//     Q-2 ) What is the worst case complexity of selection sort? (2.5 marks)
// a) O(nlogn)
// b) O(logn)
// c) O(n)
// d) O(n^2)

// Answer of question 2. :
//the worst case complexity of selection sort is O(n^2)

//Q-3) https://leetcode.com/problems/intersection-of-two-arrays/submissions/

var nums1 = [1,2,2,1];
var nums2 = [2,2];

let intersectionArray = nums1.filter((curElem) => {
    return nums2.includes(curElem);
});

console.log([...new Set(intersectionArray)]);



    