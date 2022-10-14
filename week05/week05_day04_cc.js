// Q-1) Q1. What will be the output ? (Easy) (5 marks)

function printMax(a, b) {
    if (a > b) {
    console.log(a, 'is maximum')
    } else if (a == b)
    console.log(a, 'is equal to', b)
    else
    console.log(b, 'is maximum')
    }
    printMax(3, 4)
    
// output : 4 'is maximum'

// Explanation

function printMax(a, b) {
    if (a > b) {
    console.log(a, 'is maximum')
     // checking the condition wheather a is greater than or not if condition true than print 3 is maximum but here,condition is false so, move to else if part.
    } else if (a == b)
    console.log(a, 'is equal to', b)
     // again checking the condition wheather a is equal to b or not if condition true than print 3 is equal to 4 but here,condition is false so, move to  else part.
    else
    console.log(b, 'is maximum')
     // all above conditions are failed so it will print else part i.e. 4 'is maximum'
    }
    printMax(3, 4) // calling the function and assigned arguments to parameters.i.e. a =3 and b =4.

    //Q-2) Q2. What will be the output ? (Easy) (10 marks) please run the code and verify

    let x = 50
    function func(x) {
    console.log('x is', x)
    x = 2
    console.log('Changed local x to', x)
    }
    func(x)
    console.log('x is now', x)

    // output : x is 50
    //        : changed local x to 2
    //        : x is now 50 


    