//bubble sort
//1) In the bubble sort algorithm, we check the neighbour element and swap them if required.
//2)It includes more swaps.
//3)It is slow as compared to the insertion sort.

//Insertion sort
//1)In the insertion sort, we transfer an element at one time to construct a sorted array.
//2)It includes less number of swaps.
//3)It is fast as compared to bubble sort.

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

//  In the bubble sort algorithm, we check the neighbour element and swap them if required. In the insertion sort, we transfer an element at one time to construct a sorted array. It includes more swaps. It includes less number of swaps.

// time Comp = O(n^2);
// space comp = O(1)


// Insertion sort 
// same as bubble sort 
// time comp = O(n^2)
// space comp = O(1)



// Javascript program for insertion sort 
   
// Function to sort an array using insertion sort
function insertionSort(arr, n) 
{ 
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
    } 
} 
   
// A utility function to print an array of size n 
function printArray(arr, n) 
{ 
    let i; 
    for (i = 0; i < n; i++) 
        document.write(arr[i] + " "); 
    document.write("<br>");
} 
   
// Driver code
    let arr = [12, 11, 13, 5, 6 ]; 
    let n = arr.length; 
   
    insertionSort(arr, n); 
    printArray(arr, n); 
     
// This code is contributed by Mayank Tyagi
   