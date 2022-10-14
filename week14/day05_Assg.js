// //Q-1 ) https://leetcode.com/problems/sort-integers-by-the-power-value/

// var getKth = function(lo, hi, k) {
//     let interval = [];
// for (let i = lo; i <= hi; i++) {
//     interval.push(i);
// }
// interval.sort((a, b) => {
//     if (step(a) == step(b)) {
//       return a - b;   
//     }
//     return step(a) - step(b);
// });
// return interval[k - 1];
// };

// const step = (x) => {
// let cnt = 0;
// while (x != 1) {
//     if (x % 2 == 0) {
//         x = x >> 1;
//         cnt++;
//     } else {
//         x = 3 * x + 1;
//         cnt++;
//     }
// }
// return cnt;

// };




