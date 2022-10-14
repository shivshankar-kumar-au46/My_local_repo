//Q-1 )https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;
  if (root === p || root === q) return root;
  const l = lowestCommonAncestor(root.left, p, q);
  const r = lowestCommonAncestor(root.right, p, q);
  if (l && r) return root;
  if (l) return l;
  if (r) return r;
  return null;
  
};