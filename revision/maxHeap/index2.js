// tree
// create class Tree Node
class TreeNode{
    constructor(data,left,right){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// create root node

let root = new TreeNode(1,null,null);
let node2 = new TreeNode(2,null,null);
let node3 = new TreeNode(3,null,null);
let node4 = new TreeNode(4,null,null);
let node5 = new TreeNode(5,null,null);
let node6 = new TreeNode(6,null,null);
let node7 = new TreeNode(7,null,null);
// now connect each node
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
//console.log(root)

// How to print leaf node
function printLeafNode(root){
    if(root === null) return;
    if(root.left === null && root.right === null){
        console.log(root.data);
    }
    printLeafNode(root.left);
    printLeafNode(root.right);
}

//printLeafNode(root);

// Traversals in trees
// 1)Inorder (left,root,right)
// 2)preorder (root,left,right)
// 3)postorder (left,right,root);

// Inorder
// visit left child node
// visit root node
// visit right child node

function inorder(root){
    if(root === null) return;
    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
}

// Preorder
function preorder(root){
    if(root===null) return;
    console.log(root.data);
    preorder(root.left);
    preorder(root.right);
}

// preorder(root)

// Postorder

function postorder(root){
    if(root===null) return;
    postorder(root.left);
    postorder(root.right);
    console.log(root.data);
}
// postorder(root)


// How to midify data of any target node
// target node is 5 and replace with 10;

function targetNode(root,target,newData){
    if (root === null) return ;
    if (root.data === target){
        root.data = newData;
        return;
    }
    // visit left node;
    targetNode(root.left,target,newData);
    // visit right node
    targetNode(root.right,target,newData);
}
// console.log(targetNode(root,5,10));
// inorder(root)

// Total number of nodes in Binary Tree

function countNode(root,count){
    if (root === null) return count;
    count++;
    count = countNode(root.left,count);
    count = countNode(root.right,count);
    return count;
}
console.log(countNode(root,0));

// Height of Binary Tree

function heightOfBt(root){
    if (root === null ) return ;
    if (root.left === null && root.right === null) return 1;
    let lst = heightOfBt(root.left);
    let rst = heightOfBt(root.right);
    return Math.max(lst,rst)+1;
}
console.log(heightOfBt(root))



