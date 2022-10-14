// write a program to find greatest number among three variable

// var num1 = 4;
// var num2 = 5;
// var num3 = 6;
// if(num1>=num2 && num1>=num3){
//     console.log(num1,"is the gretest number");
// }else if(num2>=num1 && num2>=num3){
//     console.log(num2,"is the greatest number");
// }else{
//     console.log(num3,"is the greatest number");
// };

// Write a program to print truth table of OR logical operator

// var a = 3;
// var b = 2;
// if(a==b || a!=b){               //false || true = true
//     console.log("true");
//     console.log("true");
//     console.log("true");

// }else{
//     console.log("false");
// };

// var a = 3;
// var b = 2;
// if(a>b || a<=b){                //true || false = true
//     console.log("true");
// }else{
//     console.log("false");
// };

// var a = 3;
// var b = 2;
// if(a==b || a<=b){               //false || false = false
//     console.log("true");
// }else{
//     console.log("false");
// };

// var a = 3;
// var b = 2;
// if(a>b || a!=b){                //true || true = true
//     console.log("true");
// }else{
//     console.log("false");
// };

// Q-1) Write a program to check the eligibility of a person for a job. A person
// is only eligible for the job if he/she is between the ages of 18 and 50. If
// he/she is less than 18 years of age, then they will be considered as a minor
// and will not be eligible for the job, and if the age is greater than 50 then
// he/she will be not considered for job as 50 years is age of retirement.

// Note - Also check if the user is entering a valid age and not giving any
// negative age as input.

// var age = 50;
// if(age>0){
//     if(age>=18){
//         if(age<=50){
//             console.log("You are eligible for the job.");
//         }else{
//             console.log("You will be not considered for job as 50 years is age of retirement.");
//         }
//     }else{
//         console.log("You will be considered as a minor and will not be eligible for the job.");
//     }
// }else{
//     console.log("please enter valid data !!");
// }



// Q-2) Write a program to make a calculator using Switch statement.Take any
// 2 numbers and ask for an arithmetic operation (like - "addition",
// "subtraction", "multiplication", "division") from the user as input and then
// print the result of these 2 numbers using the operation selected by the
// user.

// var operations = "addition";
// var a = 10;
// var b = 5;
// switch(operations){
//     case "addition" :
//         console.log("The addition of",a, "and", b, "is :",a+b);
//         break;
//     case "substraction" :
//         console.log("The subtraction of",a, "and", b, "is :", a-b);
//         break;
//     case "multiplication" :
//         console.log("The multiplication of",a, "and", b, "is :", a*b);
//         break;
//     case "division" :
//         console.log("The division of",a, "and", b, "is :", a/b);
//         break;
//     default:
//         console.log("Please enter valid data !!");        
// }


// Q-3) Write a program to take a number from the user and find it’s divisibility
// by all the prime factors of 30.
// Ex- If number entered by user = 10;
// Output: “Divisible by 2”
// “Not divisible by 3”
// “Divisible by 5”

    // var a = 15;
    // if (a%2==0){
    //     console.log("Divisible by 2");
    //     if (a%3==0){
    //         console.log("Divisible by 3");
    //         if (a%5==0){
    //             console.log("Divisible by 5");
    //         }else {
    //             console.log("Not divisible by 5");
    //         }
    //     }else {
    //         console.log("Not divisible by 3");
    //         if (a%5==0){
    //             console.log("Divisible by 5");
    //         }else {
    //             console.log("Not divisible by 5");
    //         }
    //     }
    // }else {
    //     console.log("Not divisible by 2");
    //     if (a%3==0){
    //         console.log("Divisible by 3");
    //         if (a%5==0){
    //             console.log("Divisible by 5");
    //         }else {
    //             console.log("Not divisible by 5");
    //         }
    //     }else {
    //         console.log("Not divisible by 3");
    //         if (a%5==0){
    //             console.log("Divisible by 5");
    //         }else {
    //             console.log("Not divisible by 5");
    //         }
    //     }
    // }
//************Best way of writing compare to above************ */
    // var a =58;
    var a = prompt("Please Enter any value")

    if (a%2==0){
        console.log("Divisible by 2");
    } else {
        console.log("Not divisible by 2");
    }
    if (a%3==0){
        console.log("Divisible by 3");
    } else {
        console.log("Not divisible by 3");
    }
    if (a%5==0){
        console.log("Divisible by 5");
    } else {
        console.log("Not divisible by 5");
    }


 


   
