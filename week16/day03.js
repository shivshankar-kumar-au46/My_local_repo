//Q-1 ) https://leetcode.com/problems/top-k-frequent-elements/

var topKFrequent = function(nums, k) {
    const res = []
      const freqMap = nums.reduce((acc,cv)=>{
        if(acc[cv]){
          acc[cv]=++acc[cv]
        }else {
          acc[cv]=1
        }
        return acc
      },{});
    
   
   const arr= Object.entries(freqMap).sort((a,b)=>a[1]-b[1])
  
    for(let i=arr.length-k;i<=arr.length-1;i++){
     
    res.push(arr[i][0])  
    }
    
    return res
  };


//Q-2 )//leetcode.com/problems/lowest-common-ancestor-of-a-binary-search
//-tree/


var lowestCommonAncestor = function(root, p, q) {
    if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;   
};