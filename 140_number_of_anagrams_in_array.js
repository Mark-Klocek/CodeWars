// An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

// Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

// Some examples:

//     There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
//     There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]


//P: We will be given an array of strings, will there be any numbers? will we have to c onvert anything from a string to an array? What happens in an empty array?

//R:We are returning a number wit hthe total amount of anagrams in a given array

//E:
//let array = ["dell", "ledl", "abc", "cba"]
let array = ["dell", "ledl", "abc", "cba", "bca", "bac"]
function anagramCounter (wordsArray) {
    //P
    //forEach
    //sort all words in array
    // for each word, do a check to see if the remainder of the array contains the word.
    //for each time it exists, add to a counter
    let counter = 0
    wordsArray.forEach((element,index)=>{
        wordsArray[index] = element.split('').sort().join('')
        
    })
    wordsArray.forEach((element,index)=>{
        let tempArray = wordsArray.slice(index+1)
        tempArray.forEach((element2,_)=>{
            if (element === element2){counter ++}
        })
        
    })
  return counter;
}

console.log(anagramCounter(array))