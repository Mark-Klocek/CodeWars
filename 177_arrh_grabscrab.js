// Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

// At long last, we need a way to unscramble what these pirates are saying.

// Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

// For example:

// grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )

// Should return ["sport", "ports"].

// Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

// Good luck!

//Parameters We are given a string of letters, and an array of words

//Return we are returning an array of words that the letters might have meant. The array of words must be in the same order that htey occured in the original array
//      if there are no matches, we are returning an empty array

//E: "ortsp", ["sport", "parrot", "ports", "matey"] => ["sport", "ports"]
function grabscrab(anagram, dictionary) {
    //Psuedo code
    //We want to create a returnArray and initialize it as an empty array
    //we want to re-assign the anagram to the sorted version of itself
    //take the dicitonary array, iterate through each. compare each sorted version of the element to the anagram, and if they are the same, push the element to the returnArray
    //return the returnArray
    let returnArray = []
    anagram = (anagram.split('').sort().join(''))
    dictionary.forEach(element=>{
        sortedElement = element.split('').sort().join('')
        sortedElement === anagram ? returnArray.push(element) : ''
    })
    return returnArray
  // Your code here
}

console.log(grabscrab('trisf',['first']))