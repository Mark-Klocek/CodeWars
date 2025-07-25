// Your friend Robbie has successfully created an AI that is capable of communicating in English!

// Robbie's almost done with the project, however the machine's output isn't working as expected. Here's a sample of a sentence that it outputs:

// ["this","is","a","sentence"]

// Every time that it tries to say a sentence, instead of formatting it in normal English orthography, it just outputs a list of words.

// Robbie has pulled multiple all-nighters to get this project finished, and he needs some beauty sleep. So, he wants you to write the last part of his code, a sentencify function, which takes the output that the machine gives, and formats it into proper English orthography.

// Your function should:

//     Capitalise the first letter of the first word.
//     Add a period (.) to the end of the sentence.
//     Join the words into a complete string, with spaces.
//     Do no other manipulation on the words.

// Here are a few examples of what your function should do:
// Input 	Output
// ["i", "am", "an", "AI"] 	"I am an AI."
// ["FIELDS","of","CORN","are","to","be","sown"] 	"FIELDS of CORN are to be sown."
// ["i'm","afraid","I","can't","let","you","do","that"] 	"I'm afraid I can't let you do that."

// (Any translations (eg: to Java/C#/C++/Typescript) would be greatly appreciated!)

//P: We are given an array of strings. Will there only be strings in the array or will we have to convert anything to a string? What about special characters? Will the final string ever have a period at the end of it? What about ending with any special characters that we will have to remove?

//R: Returning a string that starts with a capital letter and ends with a period.

//E: 
//let array = ["this", "is", "a", "sentence"];
let array = ['yes']
// let array = ["robbie", "created", "an", "ai"];
// let array = ["the", "sky", "is", "blue"];
// let array = ["he", "needs", "some", "beauty", "sleep"];
// let array = ["please", "finish", "this", "code"];
// let array = ["the", "machine", "is", "almost", "ready"];
// let array = ["we", "are", "running", "out", "of", "time"];
// let array = ["capitalize", "the", "first", "word"];
// let array = ["join", "the", "words", "with", "spaces"];
// let array = ["add", "a", "period", "to", "the", "end"];
function sentencify(words) {
  //P 
  // create variable that holds first word
  // create variable that holds last word
  // take first letter of first word touppercase
  // push period onto split version of last word
  // replace first word in array with first word variable
  // replace last word in array with last word variable
  //join the array with spaces and return
  // if words is 1 element long, take split word into array, first element touppercase, then push period, then return joined array without space
  
  if (words.length === 1){
    let word = words[0].split('')
    word[0] = word[0].toUpperCase()
    word.push('.')
    return word.join('')
  }
  let firstWord = words[0].split('')
  let lastWord = words[words.length -1].split('')
  
  firstWord[0] = firstWord[0].toUpperCase()
  lastWord.push('.')
  
  words[0] = firstWord.join('')
  words[words.length - 1] = lastWord.join('')
  return words.join(' ')
  
  
}

console.log(sentencify(array))