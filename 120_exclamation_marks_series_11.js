//8 kyu Exclamation marks series #11
function replace(s) {
  let returnArray = s.split('')
  returnArray.forEach((element,index) => {
    elementLower = element.toLowerCase()
    if (elementLower === 'a'||elementLower === 'e'||elementLower === 'i'||elementLower === 'o'||elementLower === 'u'){
      returnArray[index] = '!'
    }
  })  
    return returnArray.join('');
}
console.log(replace("AEIOU"))