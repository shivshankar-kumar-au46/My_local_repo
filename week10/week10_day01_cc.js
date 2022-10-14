//Q - 1) Write a program to print the sum of right diagonal of a matrix

let mat1 = [
  [1, 2, 3, 4],
  [4, 5, 6, 7],
  [7, 8, 9, 10],
  [10, 11, 12, 13],
];
let sum = 0;                   

for (let i = 0; i<mat1.length; i++) {
  let rightDiagonal = mat1[i][mat1.length-1-i] // right diagonal
      sum+=rightDiagonal;
  
}
console.log(sum)


//Q - 2) Write a program to print sum of border elements of a square Matrix
let mat = [[1,2,3],
           [4,5,6],
           [7,8,9]];
   
let sumOfBorderEle = (mat) =>
{
    let len = mat.length-1
let sumofedgeele = mat[0][0]+mat[0][len]+mat[len][0]+mat[len][len]
let sumof1strow = 0
let sumoflastrow = 0
let sumof1stc = 0
let sumoflastc = 0
for(i=0;i<mat.length;i++){
sumof1strow += mat[0][i]
sumoflastrow += mat[len][i]
sumof1stc += mat[i][0]
sumoflastc += mat[i][len]
}
return ((sumof1stc+sumof1strow+sumoflastc+sumoflastrow)-sumofedgeele)

}
console.log(sumOfBorderEle(mat));