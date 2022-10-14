// Q-1) Write a function outside two objects and bind that function to
// two objects to make it a method of those objects.

function printObject (){
    return this.firstName + " " + this.lastName;
}


let obj1 = {
    firstName :    "shiv",
    lastName  :    "kumar",
    hobbies   :   "reading books",
    mobile    :   "8434050922",
}


let obj2 = {
    firstName   : 'rahul',
    lastName    : 'kumar',
    Age         :    '23',
    add         : 'bihar',
    sex         : 'male',
    martialStatus: 'unmarid'
}

let result = printObject.bind(obj2)
console.log(result())
