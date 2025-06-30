// Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

// If n is not in the given array, return an empty array [].

// Assume that n and all values in the given array will always be integers.

// Example:

// findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]

//P: Given an array and a number n - can it be an array of numbers, strings, functions, what is in the  array? will the array always have something in it ? will it ever not be an array?

//R: We are returning an array of index numbers where n is located in the passed array




function findAll(array, n) {
  returnArray = []
  array.forEach((element,index)=>{
    if (element === n) returnArray.push(index)
  })
  return returnArray
}


//E:
console.log(JSON.stringify(findAll([1, 2, 3, 2, 1, 2, 5], 2)) == JSON.stringify([1, 3, 5]));
console.log(JSON.stringify(findAll([5, 5, 5, 5, 5], 5)) == JSON.stringify([0, 1, 2, 3, 4]));
console.log(JSON.stringify(findAll([0, 1, 2, 3, 4, 5], 6)) == JSON.stringify([]));
console.log(JSON.stringify(findAll([9, 8, 7, 6, 5, 4, 3], 4)) == JSON.stringify([5]));
console.log(JSON.stringify(findAll([10, 20, 30, 20, 10], 10)) == JSON.stringify([0, 4]));
console.log(JSON.stringify(findAll([], 1)) == JSON.stringify([]));
console.log(JSON.stringify(findAll([100, 200, 300], 200)) == JSON.stringify([1]));
console.log(JSON.stringify(findAll([7, 7, 8, 9, 7], 7)) == JSON.stringify([0, 1, 4]));
console.log(JSON.stringify(findAll([1, 3, 5, 7], 2)) == JSON.stringify([]));