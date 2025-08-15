// Write a function called findUnique which returns the only unique number from an array.

// All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.
// Example

// Input:

// [ 1, 8, 4, 4, 6, 1, 8 ]

// Expected output:

// 6

//P we are given an array of numbers, always valid integer numbers

//R: we are returning a number that is unique

//E: [1,2,2,3,4,4,3,5,5] => 1

function findUnique(numbers) {
    //P Sort the array
    // if index != last index, check tosee if element = arr[index] + 1
    // if it doesnt, then it is the unique number

    numbers = numbers.sort((a,b)=>a-b)

    let uniqueID = null
    let i = 0
    numbers.forEach((element,index)=>{
        if(index === numbers.length -1){
            element != numbers[index-1] ? uniqueID = element : ''
        }else if (index === 0){
            if (numbers[0]!== numbers[1]){
                uniqueID = numbers[0]
            }
        }else{
            if (numbers[index] != numbers[index+1] && numbers[index] != numbers[index -1]){
                uniqueID = element
            }
        }
    })
       console.log(numbers)
    return uniqueID
 
}

console.log(findUnique([1, 8, 4, 4, 6, 1, 8]))
console.log(findUnique([ 1, 4, 4, 5, 5, 3, 3, 2, 2 ]))