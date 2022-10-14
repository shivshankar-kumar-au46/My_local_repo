function bubbleSort(arr){

    //Outer pass
    for(let i = 0; i < arr.length-1; i++){

        //Inner pass
        for(let j = i+1; j < arr.length; j++){

            //Value comparison using ascending order

            if(arr[j] < arr[i]){

                //Swapping
                [arr[j],arr[i]] = [arr[i],arr[j]]
            }
        }
    };
    return arr;
};

console.log(bubbleSort([5,3,8,4,6,1,0,8,4,8,3,2]));