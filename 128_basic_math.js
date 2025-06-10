// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.
// Examples
//

//P: strings containing numbers and either the words plus or minus. String will not be empty. Will there be other operators? Will format always be number operator number operator? Will it always end with a number?

//R: String version of what the string input should be. 

//E: 
//let numString = "1plus2plus3plus4"
//let numString = "1plus2plus3minus4"
 let numString = '10plus20plus30minus40'

function calculate(str) {
  //P
  //replace plus and minus with + and -
  //evaluate the function
  //return string version of evaluation
  return eval(str.replaceAll('plus','+').replaceAll('minus','-')).toString()
}

console.log(calculate(numString))

