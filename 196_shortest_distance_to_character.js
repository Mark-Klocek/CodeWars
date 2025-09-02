// Given a string s and a character c, return an array of integers representing the shortest distance from the current character in s to c.
// Notes

//     All letters will be lowercase.
//     If the string is empty, return an empty array.
//     If the character is not present, return an empty array.

// Examples

const s = "lovecodewars"
const c = "e"
// result = [3, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 4]

// s = "aaaabbbb"
// c = "b"
// result = [4, 3, 2, 1, 0, 0, 0, 0]

// s = ""
// c = "b"
// result = []

// s = "abcde"
// c = ""
// result = []

//Params: we are given a string and character, wil the string always have at least 1 length? What do you want us to return if there is an empty string?

//Return: We are returning an array of integers that corresponds the shortest distance between where that element in the original array and the given element param

//Example: string ="world", c = "r" => [2,1,0,1,2]


function shortesttoChar(s, c) {
    
}

console.log(shortesttoChar("lovecodewars", "e"))