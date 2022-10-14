// Q-1) write an ARROW FUNCTION to print “Hello World”, 10 times, using for
// loop?

let str = () => {
    for (let i = 1; i<=10; i++){
    console.log('Hello World');
}
}
str();


// Q-2) write an ARROW FUNCTION to find the bigger of the 2 variables?
// Hint: use the ternary operator


let bigger = (a,b) => (a>b) ? 'a is the biggest number': 'b is the biggest number'

console.log(bigger(20,3))

     
    

