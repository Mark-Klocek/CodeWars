// The magic sum of 3s is calculated on an array by summing up odd numbers which include the digit 3.

// Complete the function which accepts an array of integers and returns its magic sum of 3s.

// Example: [3, 12, 5, 8, 30, 13] results in 16 (3 + 13)

// If there is no such number in the array, 0 should be returned.


let testArray = [3, 12, 5, 8, 30, 13]
function magicSum(numbers) {
  let magicThreeTotal = 0
  numbers.forEach((element)=>{
    if ((element.toString().includes('3')) && element % 2 !== 0){
      magicThreeTotal += element
    }
  })
  return magicThreeTotal
}

console.log(magicSum(testArray))