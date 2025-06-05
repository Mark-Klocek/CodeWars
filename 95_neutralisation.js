//8 kyu Neutralisation
function neutralise(s1, s2) {
  returnStr = ''
  s1 = s1.split('')
  s2 = s2.split('')
  s1.forEach((element,index) => {
    if (element === '-' && s2[index] === '-'){
      returnStr += '-'
    }
    else if (element === '+' && s2[index] === '+'){
      returnStr += '+'
    }
    else{
      returnStr += '0'
    }
  })
  return returnStr;
  
}

console.log(neutralise("--++--", "++--++"))