// Given a string and a mask (a list of lengths), split the string into its parts accordingly.
// Examples:

// |     String      |  Mask (lengths)  |          Output           |
// |-----------------|------------------|---------------------------|
// |  "1234567890"   |  (3, 3, 4)       |  ["123", "456", "7890"]   |
// |  "codewars"     |  (4, 4)          |  ["code", "wars"]         |

// Notes:

//     The mask only contains strictly positive integers.
//     A mask is valid if and only if the sum of the lengths is equal to the length of the string.
//     Otherwise, return None, Nothing or a similar empty value.

//P: We are given two variables, one is a string, and the other is an array of integers telling us the length of the word it wants to correlate to

//R: it wants us to return an array of strings that are split based on the "mask" (integer) in the 2nd array of integers

//E: "myexample", (2, 7) =>["my","example"]. If the length of the string does not equal the sum of the mask array, we return None, or Null 
let myString= "1234567890"
let myMask = [3,3,4]
function split(myString,myMask) {
    let newArr = myString.split('')
    let returnArr = []
    //P: verify that the length of string is equal to sum of mask
    //  split the original array 
    //      Then we want to iterate through the mask array
    //      splice from the beginning position to the position of t he current spot in mask array
    // join the newstringtoadd which was spliced from the array to a new string, and push that string onto return array
    // return the returnarray
    if (myMask.length == 0){
        return null
    }
    myMask.forEach(e=>{
        e < 0 ? null : ''
    })
    if (myString.length != myMask.reduce((total,current) => total += current)){
        return null
    }
    myMask.forEach(e =>{
        
        let stringToAdd = newArr.splice(0,e)
        returnArr.push(stringToAdd.join(''))
    })
    
    

    
  return returnArr;
}

console.log(split(myString,myMask))