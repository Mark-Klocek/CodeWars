//roman Numerals Encoder
function solution(number){
  const thousands = ["", "M", "MM", "MMM"];
  const hundreds  = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const tens      = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const ones      = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  let strArray = number.toString().split('')
  while (strArray.length < 4){
    strArray.unshift('0')
  }
  for(i=0;i<strArray.length;i++){
    if (i ==0){strArray[i] = thousands[strArray[i]]}
    if (i ==1){strArray[i] = hundreds[strArray[i]]}
    if (i ==2){strArray[i] = tens[strArray[i]]}
    if (i ==3){strArray[i] = ones[strArray[i]]}
  }
  return strArray.join('')
}
console.log(solution(1666))
// Logical Calculator
function logicalCalc(array, op){
  opMap = {
    'AND' : (a,b) => a && b,
    'OR' : (a,b) => a || b,
    'XOR' : (a,b) => a !== b
  }
  if (Object.keys(opMap).includes(op)){
    return array.reduce(opMap[op])
  }
  else{
    return 'invalid operator'
  }
}
console.log(logicalCalc([true, true, false, false], "AND"))