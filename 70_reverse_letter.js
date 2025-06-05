// 7 kyu reverse letter
function reverseLetter(str) {
  return str.split('').reverse().filter(element => ((element.charCodeAt(0) - 96 > 0) && element.charCodeAt(0) - 96 < 27)? element:'').join('')
  
}
console.log(reverseLetter(("ultr53o?n")))