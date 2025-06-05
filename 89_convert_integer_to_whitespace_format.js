// 6 kyu Convert integer to Whitespace format
function whitespaceNumber(n) {
    returnString = ''
    if (n > 0) returnString += ' '
    
    nBinary = n.toString(2)
    if (n < 0) {
        nBinary = nBinary.slice(1)
        returnString += '\t'
    }

    nBinary.split('').forEach((element)=> element == '1'? returnString+= '\t':returnString+= ' ')
    return returnString += '\n';
  }
console.log((whitespaceNumber(0)))