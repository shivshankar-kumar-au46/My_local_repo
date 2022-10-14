// First create Class Tree Node
// then create root node
// create another node 2 to 6;
// after creating node we have to connect all the nodes which is shown below
/**
 *                1
 *              /   \
 *             2     3
 *            / \      \
 *           4   5      6       
 * 
 * Traversals in Trees
 * 1)Inorder (left, root, right)
 * 2)Preorder (root, left, right)
 * 3)Postorder (left, right, root)
 * 
 * Inorder =>  1) Visit left-child node 
 *             2) Visit root node 
 *             3) visit right-child node
 * 
 * 
 * Preorder => 1) Visit root node first
 *             2) visit left-child node then,   
               3) visit right-child node.
       
   Postorder => 1) Visit left-child node first then,
                2) visit right-child node then,
                3) visit root node.                
  */                         
     
class TreeNode {
    constructor (data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

  function inorder(root){
    if (root === null) return;
    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
  }
  function preorder(root){
    if (root === null) return;
    console.log(root.data);
    preorder(root.left);
    preorder(root.right);
  }

  function postorder(root){
    if (root === null) return;
    postorder(root.left);
    postorder(root.right);
    console.log(root.data);
  }

const root = new TreeNode(1, null, null);
const node2 = new TreeNode(2, null, null);
const node3 = new TreeNode(3, null, null);
const node4 = new TreeNode(4, null, null);
const node5 = new TreeNode(5, null, null);
const node6 = new TreeNode(6, null, null);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;

console.log("Inorder")
inorder(root);
console.log("Preorder")
preorder(root);
console.log("Postorder")
postorder(root);
