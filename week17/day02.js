// Q-2) https://leetcode.com/problems/is-subsequence/

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

// Q-1 ) https://practice.geeksforgeeks.org/problems/path-in-matrix3805/1

function solve(r, c, Matrix, dp){
    if(r == Matrix.length || c<0  || c == Matrix[0].length ) return 0;
    if(dp[r][c] != -1) return dp[r][c];
        dp[r][c] = Matrix[r][c] + Math.max(solve(r+1,c,Matrix,dp),solve(r+1, c-1, Matrix, dp),solve(r+1, c+1, Matrix, dp));
        return dp[r][c];
}
class Solution {
    maximumPath(Matrix,n){
        //code here
        let sum = 0;
        let res = 0;
        let dp = new Array(n+1)
        for (let i = 0; i<=n; i++){
             dp[i] = new Array(n+1).fill(-1);
        }
        for (let j = 0; j<n; j++) {
            sum = solve(0, j, Matrix,dp)
            if (sum>res){
                res = sum;
            }
        }
        return res;
    }
    
}

