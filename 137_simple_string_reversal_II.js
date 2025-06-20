console.log('test')



// this Kata, you will be given a string and two indexes (a and b). Your task is to reverse the portion of that string between those two indices inclusive.

// str = "codewars", a = 1, b = 5 --> "cawedors"
// str = "cODEWArs", a = 1, b = 5 --> "cAWEDOrs"

// Input will be lowercase and uppercase letters only.

// The first index a will always be smaller than the string length; the second index b can be greater than the string length. More examples in the test cases. Good luck!

// Please also try:

// Simple time difference

// Simple remove duplicates

//P: We will be given a string, and two integers

//R: We will return a string with the part of the string within the two integers reversed

//E:
// let str = "codewars", a = 1, b = 5 //--> "cawedors"
 let str = "cODEWArs", a = 1, b = 5 //--> "cAWEDOrs"


function solve(st, a, b){
    //P
    //find portion to be replaced
    //reverse portion to be replaced
    //replace portion with reversed portion
    let portionToReplace = st.slice(a,b+1)
    let reversedPortion = portionToReplace.split('').reverse().join('')  
    string = st.replace(portionToReplace,reversedPortion)
 return string
}

console.log(solve(str,a,b))

