// how to build maxheap, heapSort and maxheap and minheap


function buildingMaxHeap (arr) {
    
    for (let i = Math.floor(arr.length/2 - 1); i >= 0; i--){
        heapify(arr, i);
    }
}


function heapify (arr, i, n) {
    let l = 2*i + 1;
    let r = 2*i + 2;
    let tempIndex;
    if (l >= n) return;
    else if (l === n - 1) tempIndex = l;
    else tempIndex = arr[l] > arr[r] ? l : r;
    if (arr[i] < arr[tempIndex]) {
        let temp = arr[i];
        arr[i] = arr[tempIndex];
        arr[tempIndex] = temp;
        heapify(arr, tempIndex, n)
    }}
function heapSort (arr) {
    buildingMaxHeap(arr);
    let  n = arr.length;
    for(let i = n-1; i >= 0; i--){
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, 0, i)
    }
}
//heapify(maxHeap,2);
//buildingMaxHeap(maxHeap)
let maxHeap = [20, 24, 15, 22, 23, 17,18];
heapSort(maxHeap);
console.log(maxHeap)

//*********************************************************************************************************************************************** */


// function buildingMaxHeap (arr) {
//     for (let i = Math.floor(arr.length/2 -1); i>0; i--) {
//         heapify(arr, i)
//     }
// }

// function heapify (arr, i, n) {
//     // first find left side and right side
//     let l = 2 * i + 1;
//     let r = 2 * i + 2;
//     let tempIndex;
//     //let n = arr.length;
//     if (l >= n) return;
//     if (l === n-1) tempIndex = l
//     // now compare with left node and right node which one is greater
//     else tempIndex = arr[l] > arr[r] ? l : r;
//     if (arr[i] < arr[tempIndex]) {
//         // swaping it
//         // a = 5; b = 6;
//         // a = a + b; => 5 + 6 => 11
//         // b = a - b; => 11 - 6 => 5
//         // a = a - b; => 11 - 5 => 6
//         arr[i] =  arr[tempIndex] + arr[i];
//         arr[tempIndex] = arr[i] - arr[tempIndex];
//         arr[i] = arr[i] - arr[tempIndex];
//         // call recursively heapify for remaining element
//         heapify(arr, tempIndex);

//     }

// }

// function heapSort (arr) {
//     // first make a valid maxHeap by calling buildingMaxHeap
//     buildingMaxHeap(arr);
//     let n = arr.length;
//     // run a loop from right to left and swap the element of 0th ele to ith ele
//     for (let i = n-1; i>=0; i--) {
//         let temp = arr[0];
//         arr[0] = arr[i];
//         arr[i] = temp;
//         heapify(arr,0,i);
//     }
// }
// let maxHeap = [20, 24, 15, 22, 23, 17, 18];
// heapSort(maxHeap);
// console.log(maxHeap);

//heapify(maxHeap, 2)
//console.log(maxHeap)


