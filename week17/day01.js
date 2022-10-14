//Q-1 ) https://leetcode.com/problems/climbing-stairs/
var climbStairs = function(n) {
    let dp = {};
  function countWays(n){
  if (n === 1 || n === 2 ) return n;
  if (dp[n]) return dp[n]
  dp[n] = countWays(n-1, dp) + countWays(n-2, dp);
  return dp[n];
  }
 
  return countWays(n)
};


//Q-2 ) https://leetcode.com/problems/longest-common-subsequence/


var isSubsequence = function(s, t) {
    let count = 0;
   let i=0;
    let j=0;
    while(i<s.length){
        if(j===t.length){
            return false;
        }
        if(s[i]===t[j]){
            i++;
        }
        j++;
    }
return true;
};