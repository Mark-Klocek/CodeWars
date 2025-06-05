//Stop gninnipS My sdroW!
function spinWords(string){
  stringArray = string.split(' ')
  for (i = 0; i <stringArray.length;i++){
      if (stringArray[i].length >= 5){
        stringArray[i] = stringArray[i].split('').reverse().join('')
      }

  }
  return stringArray.join(' ')
}