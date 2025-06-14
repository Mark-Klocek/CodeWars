// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

// Examples:

// [1, -1, 2, -2, 3] => 3

// 3 has no matching negative appearance

// [-3, 1, 2, 3, -1, -4, -2] => -4

// -4 has no matching positive appearance

// [1, -1, 2, -2, 3, 3] => 3

// (the only-positive or only-negative integer may appear more than once)

// Good luck!
//P: We are given only an array of integers, each array will have numbers that have positive and negative versions of themselves, all except one. We need to find the one that doesn't have its opposite
//R: returning the number within the array that doesn't have its opposite
//E : 
// let array = [1, -1, 2, -2, 3]
// let array = [4, -4, 5, -5, 6]
// let array = [10, -10, 20, -20, 30]
// let array = [-7, 7, -8, 8, 9]
// let array = [15, -15, -25, 25, 35]
// let array = [-100, 100, -200, 200, 300]
// let array = [0, 1, -1, 2, -2]
// let array = [-9, 9, -11, 11, -13]
// let array = [6, -6, 12, -12, 13]
// let array = [99, -99, 100, -100, 101]
function solve(arr){
    //P:
    //iterate through array
    // if element * -1 isnt in array, return that element
    let lonely = 0
    arr.forEach(element=>{
        if (!arr.includes(element*-1)){
            lonely = element
        }
    })
    return lonely
};

console.log(solve(array))