// print leaf node
class TreeNode {
    constructor(data, left, right){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
function inorder (root) {
    // base codition
    if (root === null) return;
    // visit left
    inorder(root.left);
    // visit root node
    console.log(root.data);
    //visit right child node
    inorder(root.right);
} 

function findTargetNode(root, targetNode, newNode){
    if (root === null) return;
    if (root.data === targetNode){
        root.data = newNode;
        return;
    }
    findTargetNode(root.left, targetNode, newNode);
    findTargetNode(root.right, targetNode, newNode);
}

function printLeafNode (root) {
    if (root === null) return;
    if (root.left === null && root.right === null){
        console.log(root.data)
        return;
    }
    
        printLeafNode(root.left);
    printLeafNode(root.right);
}

function countNode (root, count) {
    if (root === null) return count;
    count++;
    count = countNode(root.left, count);
    count = countNode(root.right, count);
    return count;
 
}    

let root = new TreeNode(1, null, null);
let node2 = new TreeNode(2, null, null);
let node3 = new TreeNode(3, null, null);
let node4 = new TreeNode(4, null, null);
let node5 = new TreeNode(5, null, null);
let node6 = new TreeNode(6, null, null);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;
//findTargetNode(root, 5, 10)
console.log(countNode(root, 0));
//printLeafNode(root);
//inorder(root);
// /console.log(root)
