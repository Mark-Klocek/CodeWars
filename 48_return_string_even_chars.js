//Return a string's even characters.
function evenChars(string) {
  if (string.length < 2 || string.length > 100){
    return 'invalid string'
  }
  returnArray = []
  string.split('').forEach((element,index)=> (index - 1)% 2 == 0?returnArray.push(element): '')
  return returnArray
}
console.log(evenChars('asdasdasd'))