//Q-1 )https://leetcode.com/problems/reverse-string/

function reverse (str) {
    if (str.length <= 1) {
        return str;
    }
    else {
        return str.charAt(str.length - 1) + reverse(str.substring(0,str.length-1))
    }
}
let str = "hello"
console.log(reverse(str))

//Q - 2 ) https://leetcode.com/problems/fibonacci-number/


function fib (n) {
    if (n < 2) {
        return n;
    } else {
       return fib(n-1) + fib(n-2);
    }
}
console.log(fib(4))

//Q-3 ) Write a while loop implementation of selection sort?

var arr = [7,23,2,1,5];
function selectioSort(arr){
var i = 0;
while (i < arr.length) {
    var minIndex = i;
    var j = i+1;
    while (j < arr.length) {
        if (arr[minIndex] > arr[j]) {
            minIndex = j;
        }
        j++;
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    i++;
}
return arr;
}

console.log(selectioSort(arr));

