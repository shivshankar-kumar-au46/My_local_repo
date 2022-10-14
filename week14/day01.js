// Q-1 ) Write a program to remove first node from a linked list:
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

class LikedListNode {
    constructor (data, next) {
        this.data = data;
        this.next = next;
    }
}

function addNodeAtEnd (head, data) {
    const newNode = new LikedListNode (data, null);
    curr = head;
    while (curr.next != null){
        curr = curr.next;
    }
    curr.next = newNode;
}

function removeFirstNode (head) {
    // curr = head;
    // head = curr.next;
    // return head;
            // OR
    return head.next;
}
function removeInTheMiddle(head, target){
    curr = head;
    while (curr.next.data != target){
        curr = curr.next;
    }
    curr.next = curr.next.next;
}

function printLLData (head) {
    curr = head;
    while (curr != null){
        console.log(curr.data);
        curr = curr.next;
    }

}
function reverse (head, prev) {
    if (head === null){
        return prev;
    }
    let next = head.next;
    head.next = prev;
    return reverse (next, head)
    
    
    }

// function reverse (head) {
//     var prev = null;
//     var current = head;
//     var next = null;
//     reverse (current != null)
//     while (current != null) {
//         next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;

//     }
//     return prev;
// }


console.log("Input(elements in linked list)")
const head = new LikedListNode(2, null);
addNodeAtEnd(head, 5);
addNodeAtEnd(head, 6);
addNodeAtEnd(head, 8);
addNodeAtEnd(head, 3);
//removeInTheMiddle(head, 6);
printLLData(head);
console.log("---------------------------")
let a = reverse(head, null);
printLLData(a);
// console.log("Output(elements after removing head of the linked list)")
// let rmvfirstNode = removeFirstNode(head);
// printLLData(rmvfirstNode);

