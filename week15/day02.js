// Q-1 ) https://leetcode.com/problems/maximum-depth-of-binary-tree/

var maxDepth = function(root) {
    if (root === null) return 0;
    let lst  = maxDepth(root.left);
    let rst = maxDepth(root.right);
    return  Math.max(lst, rst) +1;
    
};

// Q - 2 ) https://leetcode.com/problems/invert-binary-tree/

var invertTree = function(root) {
    if(!root) return root;
    function traverse(node) {
        if(!node) return null;
        const newNode = { val: node.val };
        newNode.left = traverse(node.left);
        newNode.right = traverse(node.right);
        //swap
        let temp = newNode.left;
        newNode.left = newNode.right;
        newNode.right = temp;
        return newNode;
    }
    
    return traverse(root);
    
    
};