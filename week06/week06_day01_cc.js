// Q-1) Explain function declaration by statement and function
// declaration by expression, by giving code examples?
// armstrome number 153 = 1(squre) + 5(squre) + 6(spure)

// function declaration by statement.

function armstrong(a){
    let num = a;
    let numCopy = num;
    let sum = 0;
    for (;num>0;){
        let P1 = num%10;
         num = Math.floor(num/10);
        sum = sum + (P1**3);
    }if(sum === numCopy){
        return ('Armstrong number');
    }else{
        return ('Not armstrong number');
    }
    }
    console.log(armstrong(153))

    
// function declaration by experssion.

let checkPalindrome = function(name){
    let str = 'madam';
    let bstr = "";
    for (let i = str.length-1; i>=0; i--){
            bstr = bstr + str[i];
    }
    if(bstr === str){
        return ('Palindrome string')
    }else{
        return ('Not palindrome string')
    }
}
console.log(checkPalindrome('madam'));