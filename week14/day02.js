// practice merge sort of LL
// list 1 : 1  -> 3 -> 2
// list 2 : 5 -> 4 -> 6 -> 7
// output : 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7


class MergeLL {
    constructor (data, next){
        this.data = data;
        this.next = next;
    }
}

function addNodeAtEnd (head1, data) {
    const newNode = new MergeLL(data, null);
    curr = head1;
    while (curr.next != null){
        curr = curr.next;
    }
    curr.next = newNode;
}

function printNode (head1) {
    curr = head1;
    while (curr != null){
        console.log(curr.data)
        curr = curr.next;
    }
}
console.log("list 1")
const head1 = new MergeLL (1, null);
addNodeAtEnd(head1, 3)
addNodeAtEnd(head1, 5)
printNode(head1)
console.log("list 2")
const head2 = new MergeLL (2, null);
addNodeAtEnd(head2, 4)
addNodeAtEnd(head2, 6)
addNodeAtEnd(head2, 8)
printNode(head2)
console.log("merged sorted linkedlist")

// list 1 : 1 -> 3 -> 2
// list 2 : 5 -> 4 -> 6 -> 7
// output : 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7

function MergeTwoHead (head1, head2){
    const head3 = new MergeLL(null, null);
    let curr = head3;
    while (head1 != null && head2 != null){
        if (head1.data <= head2.data){
            curr.next = head1;
            head1 = head1.next;
        } else {
            curr.next = head2;
            head2 = head2.next;
        }
        curr = curr.next;
        
    }

    // step - 3 and 4
    if (head1 === null) {
        curr.next = head2;
    } else {
        curr.next = head1;
    }
    
    //step - 5;
    return head3.next;
}
let mergesell = MergeTwoHead(head1, head2);
printNode(mergesell)





