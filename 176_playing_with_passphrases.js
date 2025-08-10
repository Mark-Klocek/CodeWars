// Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

// choose a text in capital letters including or not digits and non alphabetic characters,

//     shift each letter by a given number but the transformed letter must be a letter (circular shift),
//     replace each digit by its complement to 9,
//     keep such as non alphabetic and non digit characters,
//     downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
//     reverse the whole result.

// Example:

// your text: "BORN IN 2015!", shift 1

// 1 + 2 + 3 -> "CPSO JO 7984!"

// 4 "CpSo jO 7984!"

// 5 "!4897 Oj oSpC"

// With longer passphrases it's better to have a small and easy program. Would you write it?

// https://en.wikipedia.org/wiki/Passphrase

//P We are given two things - a pass code in all caps, and a number to shift the letters by. Will it always be in all caps?

//R We are returning the original string having gone through the encoding process

//E: Example 
   // "BORN IN 2015!", 1 => "!4897 Oj oSpC"


function playPass(s, n) {
    //Split the input string into an array.
    //iterate over each element in the array
    //verify if the element is a letter, number, or special character
    //if it's a letter verify to see if the indexOf that letter + the shift number is > 26
    //if its not greater, return alphabet[alphabet.indexOf(original letter) + shift]
    //if it IS greater, we want to return the indexOf + shift - 26 index of the alphabet
    //then lastly, if it is a letter and an odd index, we want to lowercase the letter
    //if it is a letter and an even index, we want to uppercase the letter
    //if it is a number, we want change it to the difference between 9 and that number
    //if it is a special character, we leave it alone
    s = s.split('')
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    alphabet = alphabet.split('')
    let returnString = s.map((element,index)=>{
        let letter = ''
        if (alphabet.includes(element)){
            if (alphabet.indexOf(element) + n > 25){
                letter = alphabet[alphabet.indexOf(element) + n - 26]
            }else{
                letter = alphabet[alphabet.indexOf(element) + n]
            }
            if (index % 2 !== 0){
                letter = letter.toLowerCase()
            }
        }
        else if (element >= '0' && element <= '9'){
            letter = 9 - Number(element)
            console.log(element)
        }else{
            letter = element
        }
        return letter
    })
    
    return returnString.reverse().join('')
}




// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(playPass("I LOVE YOU!!!", 1), "!!!vPz fWpM J")

// Test.assertEquals(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2), 
//     "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO")

//   });
// });

console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2))
