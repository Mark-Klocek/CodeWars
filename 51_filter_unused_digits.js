//Filter unused digits
function unusedDigits(...arr) {
  let returnArray = arr.join('').split('').sort((a,b)=> a-b).join('')
  returnString = ''
  for (i = 0; i<=9; i++){
    returnArray.includes(i)? '':returnString += i
  }
  
  return returnString
}
console.log(unusedDigits(12, 34, 56, 78))