// class TreeNode {
//     constructor (data, left, right) {
//         this.data = data;
//         this.left = left;
//         this.right = right;
//     }
// }

// function noOfNodes(root) {

//     if (root === null) return 0;
  
//     let lstCount = noOfNodes(root.left);
//     let rstCount = noOfNodes(root.right);
  
//     return rstCount + lstCount + 1;
//   }

//   function height(root) {

//     if (root === null) return 0;
  
//     let lstCount = height(root.left);
//     let rstCount = height(root.right);
  
//     return Math.max(lstCount, rstCount) + 1;
//   }

//   function printLeafNode (root){
//     if (root === null) return;
//     if (root.left === null && root.right === null){
//       console.log(root.data);
//     }
//   }
//   function inorder(root){
//     if (root === null) return;
//     inorder(root.left);
//     console.log(root.data);
//     inorder(root.right);
//   }
//   function preorder(root){
//     if (root === null) return;
//     console.log(root.data);
//     preorder(root.left);
//     preorder(root.right);
//   }

//   function postorder(root){
//     if (root === null) return;
//     postorder(root.left);
//     postorder(root.right);
//     console.log(root.data);
//   }

// const root = new TreeNode(1, null, null);

// const node2 = new TreeNode(2, null, null);


// const node3 = new TreeNode(3, null, null);

// const node4 = new TreeNode(4, null, null);
// const node5 = new TreeNode(5, null, null);
// const node6 = new TreeNode(6, null, null);
// node2.left = node4;
// node2.right = node5;
// node3.right = node6;
// root.left = node2;
// root.right = node3;

// // let print = printLeafNode(root.data)
// // console.log(print)

// // let count = noOfNodes(root);
// // console.log(count);

// // let countHeight = height(root);
// // console.log(countHeight)
// inorder(root);
// console.log('-----------------------')
// preorder(root);
// console.log('-----------------------')
// postorder(root);
//console.log(root)


// HEAPIFY FOR PARTICULAR NODE 
// take invalid max heap
// let maxHeap = [20,13,15,12,29,18,17];
//  function heapify (arr, i) 
//  let l = 2*i + 1;
//   let r = 2*i + 2;
//   let tempIndex;
// if (l>=arr.length) return;
// if (l === arr.length-1) tempIndex = l;
//  else tempIndex = arr[l] > arr[r] ? l : r;
//   if (arr[i] < arr[tempIndex]) {
//     [arr[i], arr[tempIndex]] = [arr[tempIndex], arr[i]]
//     heapify(arr, tempIndex)
//   }
//  heapify(maxHeap,2)
//  console.log(maxHeap)


let maxHeap = [20, 24, 15, 22, 23, 17, 18];
function buildingMaxHeap (arr) {
  for (let i = Math.floor(arr.length/2-1); i>=0; i--){
    heapify(arr,i);
  }
}

function heapify(arr, i){
  let l = 2*i + 1;
  let r = 2*i + 2;
  let tempIndex;
  if (l>=arr.length) return;
  if (l === arr.length-1) return tempIndex = l;
  else tempIndex = arr[l] > arr[r] ? l : r;
  if (arr[i] < arr[tempIndex]){
    [[arr[i]],[arr[tempIndex]]] = [[arr[tempIndex]],[arr[i]]];
    heapify(arr, tempIndex)
  }
}
// heapify(maxHeap,0)
// heapify(maxHeap,2)
buildingMaxHeap(maxHeap)
console.log(maxHeap);
// let a = heapify(maxHeap,1)
// console.log(a)
//console.log((maxHeap,1));







