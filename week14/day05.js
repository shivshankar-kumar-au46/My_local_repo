//Q-1 )
//https://leetcode.com/problems/average-salary-excluding-the-minimum-andmaximum-salary/

var average = function(salary) {
    let totalSum = 0;
let removeFirstEle = salary.sort(function(a, b){return a - b}).shift()
let removeLastEle = salary.pop()
for (let i = 0; i<salary.length; i++){
    totalSum += salary[i];
    var average = totalSum/salary.length;
}
return average
    
};


//Q - 2 ) https://leetcode.com/problems/valid-anagram/

var isAnagram = function(s, t) {
    const map = new Map();
      for (let letter of t) {
          const total = map.get(letter);
          if (total)
              map.set(letter, total + 1);
          else
              map.set(letter, 1);
      }
      let total = 0;
      for (let letter of s) {
          const val = map.get(letter);
          if (!val) {
              return false;
          } else {
              map.set(letter, val - 1);
              if (val < 0) {
                  return false;
              } else {
                  total++;
              }
          }
      }
      return total === t.length;
  };