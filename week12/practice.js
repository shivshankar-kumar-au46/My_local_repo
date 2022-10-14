// let arr = [11,11,12,13,12,14,15,12];
// let hashTable = {};
// let elementToSearch = [11,15,12,17];

// // this  loop for creating hash table 

// for (let i = 0; i<arr.length; i++){
//     let currentElement = arr[i];
//     if (currentElement in hashTable){
//         hashTable[currentElement].push(i);
//     }else {
//         hashTable[currentElement] = [i];
//     }
// }
// //console.log(hashTable)
// let result = [];

// for (let i = 0; elementToSearch.length; i++){
//     let currentElementTosearch = elementToSearch[i];
//     if (currentElementTosearch in hashTable){
//         result.push(hashTable[currentElementTosearch])
//     }else {
//         result.push(-1);
//     }
// }
// console.log(result)

// for (let i = 0; i<nums.length; i++){
//     for (let j = i +1; j<nums.length; j++){
//         if (nums[i] + nums[j] === target){
//             return ([i, j])
//         }
//     }
// }

// Stacks practice

// function reverse(str) {
//     let stack = [];
//     for (let i = 0; i<str.length; i++) {
//         stack.push(str[i]);
//     }
//     let stringReverse = "";
//     while (stack.length > 0) {
//         stringReverse += stack.pop();
//     }
//     return stringReverse;
// }
// let message = "shiv kumar";
// let reverseStr = reverse(message);
// const isPlindrome = message == reverseStr ? "Palindrome": "not Palindrome";
// console.log(reverse(message))



// var calPoints = function(ops) {
//     let stack = [];
//     let sum = 0;
//     for (let i =0; i<ops.length; i++) {
// if (ops[i] != "C" && ops[i] != "D" && ops[i] != "+") {
//     stack.push(Number(ops[i]));
    
// }else if(ops[i] === "C"){
//     stack.pop();
 
// } else if (ops[i] === "D"){
//     stack.push(stack*2)
//     // stack.push(stack *=2)
// } else if (ops[i] === "+"){
//     let sz = stack.length;
//     stack.push(parseInt(stack[sz-1] + stack[sz-2]));
// }
// }
//    return stack.reduce((a, b) => a + b)
//     return sum;
    
// };

// Time complexity of dequeue and isEmpty method?

// Queue practice
// method of Queue
//dequeue --> pop first element
//enqueue --> push the element at last
// peek --> it peek last element of array
// isEmpty --> it gives true or false

// Method --> 1;

// dequeue method
// let arr = [ 1,3,5,6,7];
// let output = arr.shift();
// console.log(output);

// // enqueue method
// let output2 = arr.push(7)
// console.log(arr);

// // peek method

// console.log(arr[0]);

// // isEmpty method;
// let queue = [ ]
// let isEmpty = queue.length === 0 ? true : false;
// console.log(isEmpty)

// Method -->2; (Using Class)

// class Queue {
//     constructor (...items) {
//         this.queue = [...items]

//     }
//     dequeue () {
//         if(this.isEmpty()){
//             return NaN;
//         }
//         const firstEle = this.queue.shift();
//         return firstEle;
//     }

//     isEmpty() {
//         return this.queue.length === 0 ? true : false;
//     }

//     enqueue (ele) {
//         this.queue.push(ele);
//     }

//     peek() {
//         return this.queue[0];
//     }
// }
// const queue1 = new Queue(1, 2, 3)
// const queue2 = new Queue(1,3,4,5,6);
// queue1.enqueue(7);
// queue1.dequeue()
// console.log(queue1)

// Recursion Practiice
// using loop or itration
// print number from 5 to 1;
// for (let i = 5; i>0; i--){
//     console.log(i);
// }

//Print form 10 to 1 using itration

// for (let i = 1; i<=10; i++){
//     console.log(i)
// }

// Print from 10 to 1 using recursion

// function recursion (n){ 
//      if (n > 10){
//         return;
//      }  
//      console.log(n);
//      recursion (n+1);
// }

// recursion(1)


//print sum of n natural number;
// let sum = 0;
// for (let i = 1; i<=5; i++){
//     sum = sum + i;
// }
// console.log(sum);

// using Recusion find sum

// function sumNatural (n, sum){
//     if (n === 5){
//         sum +=n;
//         console.log(sum);
//         return;
//     }
//     sum +=n;
//     sumNatural(n+1, sum);
//     console.log(n)
// }
// sumNatural(1, 0);

// find factorial of n nuber using for loop

// n! = n!*(n-1)!
// 3! = 3*2*1;
// 4! = 4*3*2*1;

// for (let i = 0; i<4; i++) {

// }

// find factorial of n nuber using recursion

// function calc_factorial(n) {
//     debugger;
//     if (n === 1 || n === 0){
//         return 1;
//     }
//     factorialOf_nm_1 = calc_factorial(n-1);

//     factorialOf_n = n*factorialOf_nm_1;
//     return factorialOf_n;

// }
// console.log(calc_factorial(5))


// print fibonachi series using recursion

// function printFib (a, b, n) {
//     if (n === 0) {
//         return;
//     }
//     c = a + b;
//     console.log(c)
//     printFib(b, c, n-1); 
// }
// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);
// let n = 7;
// printFib(a, b, n-2)

// print x^n (stack height is n)

// function calPown(x, n) {
//     debugger;
//     if (n === 0){
//         return 1;
//     }
//     if (x === 0){
//         return 0;
//     }
//     calnm1 = calPown(x, n-1);
//     calstack = x * calnm1;
//     return calstack;
// }
// let x = 2, n = 5;
// let ans = calPown(x, n);
// console.log(ans);

// Print x^n (stack height is logn)

// function calPown(x, n) {
//     if (n === 0){
//         return 1;
//     }
//     if (x === 0){
//         return 0;
//     }
//     // if n even
//     if (n % 2 === 0) {
//         return calPown(x, n/2)*calPown(x, n/2);
//     }else {
//         return calPown(x, n/2)*calPown(x, n/2)*x;
//     }

// }
// let x = 2, n = 5;
// let ans = calPown(x, n);
// console.log(ans);

// in operator

// let obj = {
//     a : 3,
//  firstName : "shiv",
//  MiddleName : "shankar",
//  lastName : "kuamr",
//  location : {
//     country : "India",
//     state : "Bihar",
//     District : "Patna"
//  }

// }
// if ("a" in obj) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

// I have to count frequancy of each element 

// let arrOfFruits = ["orange","orange","banana","papaya","mango","banana","papaya","grapes","orange","shiv","rahul","shiv","ram","mohan","rahul"];
// let countObj = {};

// for (let ele of arrOfFruits){
//     if (ele in countObj) {
//         countObj[ele] +=1;
//     } else {
//         countObj[ele] = 1;
//     }
// }
// console.log(countObj);

// let num = [1,2,3,4,3]

// function findDuplicate (num) {
// let obj = {};
// for (let ele of num){
//     if (ele in obj) {
//         obj[ele] +=1;
//     } else {
//         obj[ele] = 1;
//     }

//     // if (Object.value(obj) === 2){
//     //     console.log(obj[ele]);
//     // }

// }
// return obj;

// }
// console.log(findDuplicate(num));

// LikedList Practice

class LinkedlistNode {
    constructor (data, next) {
        this.data = data;
        this.next = next;
    }

}

function addNodeAtLast (head, data) {
        const newNode = new LinkedlistNode(data, null);
        curr = head;
        while (curr.next != null) {
            curr = curr.next;
        } 
        curr.next = newNode;
}

function addNodeAtBeginning (head, data) {
    let headNode = new LinkedlistNode(data, head)
    return headNode; 
   
}

function printLinkList(head){
    for (let curr = head; curr!=null; curr = curr.next){
        console.log(curr.data)
    }
}

function reverseLinkedList(head){
   let prev = null;
   let curr = head;
   let next = null;
   while (curr != null){
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
   }
   return prev;
}

const head = new LinkedlistNode(1, null)
addNodeAtLast(head, 2);
addNodeAtLast(head, 3);
addNodeAtLast(head, 4);
addNodeAtLast(head, 5);
const Nhead = addNodeAtBeginning(head, 9);
printLinkList(head)
console.log("after reverse---------------------")
let reverse = reverseLinkedList(head);
printLinkList(reverse)














































































































































