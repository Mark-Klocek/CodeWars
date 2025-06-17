// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

//P: Give me a string, no numbers or arrays?

//R:First function will return the string with vowels replaced by numbers




//E:
// let string = "Programming is fun!"
// let string = "Decode this sentence now."
// let string = "AEIOU are vowels."
// let string = "Why did you leave me?"
// let string = "Encryption complete."
// let string = "hello world"
// let string = "Can you read this?"
// let string = "Testing one two three."
// let string = "This is a simple string."
// let string = "Vowels will be encoded."

function encode(string) {
  //P
  //split string into array
  //search each element for vowel
  //replace vowel with numer
  //join array back to string
  //return string
  
  string = string.replaceAll("a","1").replaceAll('e','2').replaceAll('i','3').replaceAll('o','4').replaceAll('u','5')
  return string
}

function decode(string) {

  //P
  //take in string
  //5 replace alls for the numbers into letters
  //return string
  string = string.replaceAll("1","a").replaceAll('2','e').replaceAll('3','i').replaceAll('4','o').replaceAll('5','u')
  return string
}

console.log(decode(encode(string)))