// Related to MrZizoScream's Product Array kata. You might want to solve that one first :)

// This is an adaptation of a problem I came across on LeetCode.

// Given an array of numbers, your task is to return a new array where each index (new_array[i]) is equal to the product of the original array, except for the number at that index (array[i]).

// Two things to keep in mind:

//     Zeroes will be making their way into some of the arrays you are given
//     O(n²) solutions will not pass.

// All input arrays will be valid arrays of nonzero length.
// Examples:

// [1, 2, 3, 4]              => [24, 12, 8, 6]
// [2, 3, 4, 5]              => [60, 40, 30, 24]
// [1, 1, 1]                 => [1, 1, 1]
// [9, 0, -2]                => [0, -18, 0]
// [0, -99, 0]               => [0, 0, 0]
// [3, 14, 9, 11, 11]        => [15246, 3267, 5082, 4158, 4158]
// [-8, 1, 5, 13, -1]        => [-65, 520, 104, 40, -520]
// [4, 7, 3, 6, 2, 14, 7, 5] => [123480, 70560, 164640, 82320, 246

// the input is an array of Number-s
// the output must be an array of BigInt-s


//P We are given an array of numbers, there will be some zeroes

//R: We are returning an array of the product of hte original array except the element of each element

//E: [2, 3, 4, 5]    => [60, 40, 30, 24]
function productSansN(numbers) {
  let returnArray = []
  let leftArray = []
  let totalLeft = 1n
  for (let i = 0; i < numbers.length; i++) {
    leftArray.push(totalLeft)
    totalLeft = totalLeft * BigInt(numbers[i])
  }

  let totalRight = 1n
  let rightArray = []
  for (let i = numbers.length - 1; i >= 0; i--) {
    rightArray.unshift(totalRight)
    totalRight = totalRight * BigInt(numbers[i])
  }

  for (let i = 0; i < leftArray.length; i++) {
    returnArray.push(leftArray[i] * rightArray[i])
  }
  return returnArray
}



let ogArray = [1,2,3,4]


