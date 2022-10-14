//Q-1 ) Write a program to remove first node from a linked list:
// (Super Easy)
// Example 1:
// Input(elements in linked list)
// 2
// 5
// 6
// 8
// 3
// Output(elements after removing head of the linked list)
// 5
// 6
// 8
// 3


// first i have to make my linked list
// class for majking a single node of linked list
// class linkedListNode {
//     constructor(data, next) {
//       this.data = data;
//       this.next = next;
//     }
//   }
  
//   // function to add a node at the end of a linked list
//   function addNodeAtEnd(head, data) {
//     let current = head;
//     while (current.next !== null) {
//       current = current.next;
//     }
//     const newNode = new linkedListNode(data, null);
//     current.next = newNode;
//   }
  
//   // head node
//   let headNode = new linkedListNode(2, null);
  
//   addNodeAtEnd(headNode, 5);
//   addNodeAtEnd(headNode, 6);
//   addNodeAtEnd(headNode, 8);
//   addNodeAtEnd(headNode, 3);
//   // now our linked list is ready which looks like this
//   let curr = headNode;
//   while (curr !== null) {
//     console.log(curr.data);
//     curr = curr.next;
//   }
//   //now i have to remove first node
//   // function to remove first node of a linked list
//   function remNodeStart(head) {
//     head = head.next;
//     return head;
//   }
  
//   headNode = remNodeStart(headNode);
  
//   // i removed first node and now linked list looks like this
//   console.log("new linked list after removing first node");
//   curr = headNode;
//   while (curr !== null) {
//     console.log(curr.data);
//     curr = curr.next;
//   }  



// //   Q-1 ) Convert Binary Number in a Linked List to Integer:
// // https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-int
// // eger/
// // Given head which is a reference node to a singly-linked list. The value of
// // each node in the linked list is either 0 or 1. The linked list holds the binary
// // representation of a number.
// // Return the decimal value of the number in the linked list.
// // Example 1:
// // Input: head = [1,0,1]
// // Output: 5
// // Explanation: (101) in base 2 = (5) in base 10


//   var getDecimalValue = function(head) {
//     if (!head) return head;
//  let numStr = '';
//  let current = head;
//  while (current && current.val !== null) {
//    numStr += current.val;
//    current = current.next;
//  }
 
//  return parseInt(numStr, 2);
   
// };


// //my code of linkedlist

class LinkListNode {
  constructor (data, next) {
      this.data = data;
      this.next = next;
  }
}
// add node at last
function nodeAtLast (head, data) {
  current = head;
  while (current.next != null){
      current = current.next;
  }
  const newNode = new LinkListNode(data, null);
  current.next = newNode;
}


const headNode = new LinkListNode(2,null)
nodeAtLast(headNode, 5)
nodeAtLast(headNode, 6)
nodeAtLast(headNode, 8)
nodeAtLast(headNode, 3)

let curr = headNode;
while (curr != null){
  console.log(curr.data)
  curr = curr.next;
}

function rmNodeStart (head){
  head = head.next
 return head;
}
headNode = rmNodeStart(headNode);


