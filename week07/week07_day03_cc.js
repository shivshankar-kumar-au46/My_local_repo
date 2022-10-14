// Q-1) Write a function to sort an array of numbers.
// Input:
// [8,5,6,3]
// Output:
// [3,5,6,8]

const arrInput = [8,5,6,3];

let arrayInAscending = (arrInput) => {

    let result = arrInput.sort((a, b) => a - b)
    return result;

}
console.log(arrayInAscending(arrInput));


// Q - 1 ) Defanging an IP Address
// Given a valid (IPv4) IP address, return a defanged version of that IP
// address.
// A defanged IP address replaces every period "." with "[.]".
// https://leetcode.com/problems/defanging-an-ip-address/

const address = "1.1.1.1";

var defangIPaddr = function (address) {

    let validIp = address.split(".").join("[.]")
    return validIp;
};

console.log(defangIPaddr(address));
