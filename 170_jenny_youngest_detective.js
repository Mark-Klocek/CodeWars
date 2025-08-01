// Jenny is 9 years old. She is the youngest detective in North America. Jenny is a 3rd grader student, so when a new mission comes up, she gets a code to decipher in a form of a sticker (with numbers) in her math notebook and a comment (a sentence) in her writing notebook. All she needs to do is to figure out one word, from there she already knows what to do. And here comes your role - you can help Jenny find out what the word is!

// In order to find out what the word is, you should use the sticker (array of 3 numbers) to retrive 3 letters from the comment (string) that create the word.

//     Each of the numbers in the array refers to the position of a letter in the string, in increasing order.
//     Spaces are not places, you need the actual letters. No spaces.
//     The returned word should be all lowercase letters.
//     if you can't find one of the letters using the index numbers, return "No mission today". Jenny would be very sad, but that's life... :(

// Example: input: [5, 0, 3], "I Love You" output: "ivy" (0 = "i", 3 = "v", 5 = "y")

//P: We are given a string, and an array of 3 numbers that is the place of the letter we want. Will the numbers always correspoind with the index of a letter? Wil t here ever be any special characters? Can a special character be treated as a letter?

//R: we are returning a string based on the index numbers from the original string built with letters based on the index numbers from the passed array

//E: [0,2,3] "We are Billies" = > "war"

function missingWord(nums, str) {
  //Psuedo
  //strip the string of all spaces
  //split the string into an array
  //sort the nums array in ascending order
  //iterate through number array
  //if the string contains the index at the current place in the number array
  //push the element of the string array corresponding to the number array onto a new array
  //else false the bool so it returns error message
  //join the new array into a new word(string)
  //return the final string

  str = str.replaceAll(" ","")
  str = str.split('')
  let outside = false
  let returnArr = []
  nums = nums.sort((a,b)=>a-b)
  nums.forEach((element,_)=>{
    if(str[element]){
        returnArr.push(str[element].toLowerCase())
    }
    else{
        outside = true
    }
  })
  if (outside){
    return 'No mission today'
  }
  else{
    return returnArr.join('')
  }
}