// Q-1) Take an integer array(length >10) as input from the user, and extract
// numbers from index 2 to 8 into a new array, using inbuilt function.
// Elements should not be removed from the original array.

let originalArray = [];

for ( let i = 1; i<=11; i++){

    let inputNum = prompt('Enter Array Element');
    originalArray.push(parseInt(inputNum));
    var extractedArray = originalArray.slice(2,9);

  }
     console.log(originalArray);
    console.log(extractedArray);


//     Q-2) Take an integer array(length >10) as input from the user, and extract
// numbers from index 2, 7 numbers into a new array, using the inbuilt
// function. Elements should be removed from the original array.

//(1,2,3,4,5,6,7,8,9,10,11)

var result = [];
var size = 12;
for (let i = 0; i < size; i++){
result[i] = parseInt(prompt('Enter Array Element' + (i +1)))
}
var resultFinal = result.splice(2,7);
console.log(result)
console.log(resultFinal)


// Q-3) Take an integer array(length >10) as input from the user, and use
// reduce function to find the average of the whole array.

var userInputArr = [];
var size = 12;
for (var i = 0; i< size; i++){
  userInputArr[i] = parseInt(prompt('Enter array element' + (i+1)));
  var average = userInputArr.reduce(function(sum,value){
    return sum + value;
  },0) / userInputArr.length
}
console.log(userInputArr)
console.log('average of given input is : ',average)




   