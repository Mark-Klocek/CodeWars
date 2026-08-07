// Description:

// Write a method (or function, depending on the language) that converts a string to PascalCase, that is, all words must have their first letter capitalized and spaces must be removed.
// Examples (input --> output):

// "hello case" --> "HelloCase"
// "pascal case word" --> "PascalCaseWord"

// Don't forget to rate this kata! Thanks :)

// Note: for historical reasons, the function is named camelCase() or similar in some languages, but it should actually perform conversion to PascalCase.

//P : we are given a string of words

//R : we are to return the string of given words in Pascal format. What if there are capital letters in the midle of each word? 

//E : my name is mark => MyNameIsMark

let myString = "thIs is My stRing"
function camelCase(string){

    //P: make sure all letters are uniform from the initial string input
    //  split each word in the original sentence by space, so we have each word separated
    //  make the first letter of each word capitalized
    //  rejoin the array of words into a single string, making it pascal formatted
    string = string.toLowerCase()
    let returnString = ''
    let wordArray = string.split(' ')
    wordArray.map(e=> {
        let firstLetter = e[0].toUpperCase()
        let endOfWord = e.slice(1)
        let entireWord = firstLetter+endOfWord
        returnString += entireWord
    })
    
    




  return returnString
}

console.log(camelCase(myString))
