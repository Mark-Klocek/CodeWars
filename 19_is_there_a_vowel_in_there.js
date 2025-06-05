//is there a vowel in there?
let testArray = [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]
function isVow(a){
  let vowelCodes ={
    97 : 'a',
    101 : 'e',
    105 : 'i',
    111 : 'o',
    117 : 'u'
  }
  let newArray = a.map((element)=> Object.keys(vowelCodes).includes(element.toString()) ? vowelCodes[element.toString()] : element)
  
  return newArray
}
console.log(isVow(testArray))