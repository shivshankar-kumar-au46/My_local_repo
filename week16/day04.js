// Note - Solve both the questions using Dynamic Programming(Memoization)
// Q-1 ) https://leetcode.com/problems/fibonacci-number/

var fib = function(n) {
    let dp = {};
    if (n<2) return n;
    if (dp[n]) return dp[n];
    dp[n] = fib(n-1, dp) + fib(n-2, dp);
    return dp[n]; 
};


//Q-2 ) https://leetcode.com/problems/powx-n/

var myPow = function(x, n) {
    if (n===0) return 1;
    
    let pow = Math.abs(n);
    
	let result = pow%2===0 ? myPow(x*x,pow/2) : myPow(x*x,(pow-1)/2) * x;
    
    return n < 0 ? 1/result : result; 
};


