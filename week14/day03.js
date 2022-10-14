//Q-1 ) Reverse a linked list using recursion

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


function printLLData (head) {
    curr = head;
    while (curr != null){
        console.log(curr.data);
        curr = curr.next;
    }

}
function reverseLL (head, prev) {
    if (head === null){
        return prev;
    }
    let next = head.next;
    head.next = prev;
    return reverseLL (next, head)
    
    
    }

console.log("Input(elements in linked list)")
const head = new LikedListNode(2, null);
addNodeAtEnd(head, 5);
addNodeAtEnd(head, 6);
addNodeAtEnd(head, 8);
addNodeAtEnd(head, 3);
printLLData(head);
console.log("After reverse LL")
let a = reverseLL(head, null);
printLLData(a);
