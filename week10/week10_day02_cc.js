//Q - 1) Write a function to return sum of rows of a matrix as an array

let mat = [
    [ 1, 2, 3 ],
    [ 7, 2, 6 ],
    [ 4, 8, 2 ]
  ];
  
  // sums of rows
  let rowSum = mat.map(r => r.reduce((a, b) => a + b));
  
  
  console.log(rowSum);


  //Q-2 )Sqrt(x)
//https://leetcode.com/problems/sqrtx/

var x = 4;

var mySqrt = function(x) {
      let left = 0;
        let right = x;
    let ans;
      
          while(left<=right){
            const mid = Math.floor((left+right)/2);
            if(mid*mid === x){
             return mid;
            }else if(mid*mid<x){
                left = mid+1;
                ans = mid
            }else{
                right = mid - 1
    
            }
        }
        return left-1
    
};
console.log(mySqrt(x));



