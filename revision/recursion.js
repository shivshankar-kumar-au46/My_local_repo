// sum a n number using recursevily

function sum(n){
    if (n===1){
        return 1;
    } else {
        return n + sum(--n);
    }
}
console.log(10)

//  write a programe to print factorial number