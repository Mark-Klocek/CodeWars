// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//P: We are given a string of characters

//R: we are returning the count of characters in that string that occur more than once

//E: 'aabbedtf' => 2, because a and b both occur more than once

let str = 'abbccdef'

console.log('test')
function duplicateCount(text){
    //Psuedo
    //we want to split the string into an array
    //then we want to create two empty arrays
    //As we iterate through the original string, we want to check to see if that character exists in the first array. if it does not exist, we add it if it does exist, we do another check
    //if it exists in the first array, we check to see if it exists in the second array. if it DOES exist in the 2nd array already, we ignore it. if it does NOT exist in the 2nd array, we add it to the 2nd array
    //return the length o the second array
    text = text.split('')
    let arr1 = []
    let arr2 = []

    text.forEach(element =>{
        if (!arr1.includes(element.toLowerCase())){
            arr1.push(element.toLowerCase())
        }
        else if (arr1.includes(element.toLowerCase()) && !arr2.includes(element.toLowerCase())){
            arr2.push(element.toLowerCase())
        }
    })
  return arr2.length
}


console.log(duplicateCount(str))