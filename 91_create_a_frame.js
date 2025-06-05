//6 kyu Create a frame!
const frame = (text, char) => {
  lengthArray = text.map(element => element.length)
  longestWord = lengthArray.sort((a,b)=>b-a)[0]
  topAndBottomBorder = ''
  returnString = ''
  for (i=0;i<longestWord+4;i++){
    topAndBottomBorder += char
  }
  
  returnString += topAndBottomBorder + '\n'
  text.forEach(element => {
    returnString += `${char} ${element} `
    elementLength = element.length
    while (elementLength < longestWord){
        returnString += ' '
        elementLength ++
    }
    returnString += `${char}\n`
  })
  return returnString += `${topAndBottomBorder}`
};
console.log(frame(['Small','frame'], '+'))