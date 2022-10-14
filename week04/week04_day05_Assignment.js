// Q-1) Write a program to print the first 50 even numbers.
// Note- Even nos are - 2, 4, 6, 8….

for (let i = 2; i<=50; i+=2){
    console.log(i);
}

// Q-2) Write a program to print all the prime numbers between 1 and 100.
// Note- A number that is divisible only by itself and 1 (e.g. 2, 3, 5, 7, 11) is
// called prime number.
// Ex: 1 is not a prime number | 17 is a prime number

for(var i = 2; i<=100; i++){
    var res = true;
for(var j = 2; j<i; j++){
if(i%j == 0){
    var res = false;
    break;
}
}
if(res){
    console.log(j);
}
}


// Q-3) Ask a number input from the user, and display a message if
// the entered number is an Armstrong number.
// Ex: 1³ + 5³ + 3³=153
// Note: Also handle edge cases and bad inputs appropriately.

let sum = 0;
 const num = 153;
 let temp = num;
 while(temp>0){
     let remainder = temp%10;
     sum = sum + remainder**3;
     temp = parseInt(temp/10);
 }
 if(sum == num){
 console.log(num,'is an Armstrong number');
 }else{
     console.log(num, 'is not an Armstrong number');
 }

