// Q-1) Write a program to print even numbers of an array of numbers using
// for…of

const Numarr = [1,2,3,4,5,6,8]
for (let element of Numarr){
    if(Numarr[element]%2==0){
      let  newArr = Numarr[element]
      console.log(newArr)
    }
}

// Q-2) Write a function to convert an array of string of numbers into a number
// and multiply it by 10.
// Input:
// [‘1’,‘2’,‘3’,‘4’,‘5’,‘6’]
// Output:
// 1234560

let arr = ['1','2','3','4','5','6']

let numArray = (arr) => { 
let strNum = [];
let result = 0;
    for (let i = 0;i<arr.length; i++) {
        let strNum = parseInt(arr[i])
        result = result*10 + strNum;
    }  
        console.log(result*10)
}
numArray(arr)


//Q-1) Plus One

let plusOne = (digit) => {
    let input = digit;
        let result = [];
        let sum = 0;
        
        for (let i = 0; i<input.length; i++){
            let temp = input[i];
            sum = sum*10 + temp;
            plus = (parseInt(sum) +1)
        
            result = plus.toString().split("");
        }
        console.log(result)
    }
        plusOne([1,0,0])

        



