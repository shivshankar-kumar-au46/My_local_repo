// Q-1) Write a curryfied function for the following function:
// function fun(a,b,c){
// return a+b+c
// }

function sum (a){
	return function (b){
  		return function (c){
    		return a + b + c;
    }
  }
}
 console.log(sum(1)(3)(5));


 //Q-2) Write a curryfied function for the following function:
// function myFunc(a,b,c){
//     return (a+b)/c}


function average (a) {
	return function (b) {
  		return function (c) {
    		return (a+b)/c;
    }
  }
}

console.log(average(6)(4)(2));

    
