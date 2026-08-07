// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

//P: we are given a string of ascii characters

//R: we are asked to return a boolean displaying whether or not the word english is in the string

//E: wowoenglish => true

let tester = "abcEnglwewishdef"

function spEng(sentence){
//P: since case does not matter, we can first make the string lowercase
//  then we check to see if the string includes the word english, return if it does or not

    return sentence.toLowerCase().includes('english')
}

console.log(spEng(tester))