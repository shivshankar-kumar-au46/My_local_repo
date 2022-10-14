//Q-1 ) https://leetcode.com/problems/count-complete-tree-nodes/


var countNodes = function(root) {
    if (root === null) return 0;
    let lst = countNodes(root.left);
    let rst = countNodes(root.right);
    return totalCount = (lst + rst) +1;
    
};


//Q - 2 ) https://leetcode.com/problems/balanced-binary-tree/

var isBalanced = function(root) {
    return getHeight(root) !== -1;
  
  function getHeight(root) {
      if(!root) {
          return 0;
      }
      let left = getHeight(root.left);
      let right = getHeight(root.right);
      if(left == -1 || right == -1 || Math.abs(left - right) > 1) {
          return -1;
      }
      return 1 + Math.max(left, right);
  }
   
};