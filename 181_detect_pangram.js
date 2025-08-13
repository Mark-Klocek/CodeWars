// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


//P We are given a string, and we are to determine if it is a pangram

//R: We are returning a boolean to see if the string is a pangram or not

//E:    'abcdefghijklmnopqrstuvwxyz' => true,
let str ='abcdefghijklmnopqrstuvwxyz'
function isPangram(string){
    //Psuedo
    //create an alphabet string a-z
    //break input string into array of characters
    //iterate through array
    //replace each character in the alphabet with the element in each array with an empty space
    //return if alphabet string ==== ''
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    string = string.toLowerCase().split('')
    string.forEach(element=>{
        alphabet = alphabet.replace(element,'')
    })
    
    
    return alphabet === ''



}

console.log(isPangram(str))