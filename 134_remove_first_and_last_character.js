// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
// Examples

// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL
//P: String is going to be entered as an argument - will it always be a string? or would it be a number that would have to be converted to a string?
//R: Check if length of string is < 3, return NULL if so. Otherwise, we return a version of hte original string separated by spaces without the first and last item in the string
//E:
//let string = "1,2,3"      //=>  "2"
//let string = "1,2,3,4"    //=>  "2 3"
//let string = "1,2,3,4,5"  //=>  "2 3 4"
//let string = "1"
//let string = "1,2"
//let string = ""
function array(string) {
  //P
  //Return NULL if string is less than 3 length
  //split string on comma, pop off end and shift of beginning, then join the array on a space
  if (string.split(',').length < 3) return null
  string = string.split(',').slice(1)
  i = string.pop()
  return string
  console.log(string)
}
console.log(array(string))