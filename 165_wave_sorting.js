// A list of integers is sorted in “Wave” order if alternate items are not less than their immediate neighbors (thus the other alternate items are not greater than their immediate neighbors).

// Thus, the array [4, 1, 7, 5, 6, 2, 3] is in Wave order because 4 >= 1, then 1 <= 7, then 7 >= 5, then 5 <= 6, then 6 >= 2, and finally 2 <= 3.

// The wave-sorted lists has to begin with an element not less than the next, so [1, 4, 5, 3] is not sorted in Wave because 1 < 4

// Your task is to implement a function that takes a list of integers and sorts it into wave order in place; your function shouldn't return anything.

// Note:

//     The resulting array shouldn't necessarily match anyone in the tests, a function just checks if the array is now wave sorted.

//P: We are given an array. Will that array always only be integers? Will there be negative numbers? Will there only ever be one array? Will all arrays be possible to be waves? Ex. an array of [1,1,1,1] cannot be a wave.Will there always be at least 2 integers in the array?

//R: We are not returning anything - we are instead re-arranging the array that we are given

//E: Example, to make a wave of [1,2,3,4] we should do [4,1,3,2]

// let array = [1, 2, 3];
// let array = [10, 5, 6, 3];
// let array = [4, 1, 7, 8, 2];
// let array = [9, 6, 8, 3, 1];
// let array = [5, 3, 1, 2, 3];
// let array = [1, 4, 2, 3, 5, 6];
// let array = [11, 10, 9, 8, 7, 6];
 let array = [2, 2, 3, 3, 4, 4];
// let array = [100, 200, 300, 400, 500];
// let array = [7, 1, 5, 2, 6];
function waveSort(arr) {
    //P: sort the given array in descending order, since the "wave" must start with a number that is higher than the next. Starting with the highest number will guarantee that.
    //create a copy of the sorted array
    // iterate through copy of array
    // we want to change every other position in the array
    //check to see if index is odd (since we want to leave the first index alone, since it is already sorted the first index will always be greater)
    //we want to swap every odd index with the index next to it
    //have the copy of array at index be equal to the original array of index + 1
    //have the copy of the array at index +1 be equal to the original array of index
    //check to make sure you arent trying to swap the last number the array copy


    arr.sort((a,b) => b-a)//sorting original array descending
    let newArray = [...arr]//copying original array
    
    newArray.forEach((element,index)=>{
        if (index % 2 !== 0 && index != newArray.length-1){ //making sure to only target odd indexes that arent at the end of the array
            arr[index] = newArray[index + 1] //swapping odd index with next index of og array
            arr[index + 1] = newArray[index] //swapping next index with current index of og array
        }
    })
    console.log(arr)
    
  return
}

waveSort(array)