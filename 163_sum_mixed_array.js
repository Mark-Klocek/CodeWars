// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
//P: We will be given an array of integers, will they be positive? will they sometimes be negative? they will always either be a string or int version of a number? no actual string words?

//R: We want to return a number of the sum of the array

//E: [4,3,'1','9'] => 17


function sumMix(x){
    //P: use reduce
    //during reduce, add + to element to convert it to number
    //return total number
    return x.reduce((acc,c)=>acc += +c,0)
}