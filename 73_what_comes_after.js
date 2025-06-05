//7 kyu What comes after? 
function comes_after(str,l) {
  returnString = ''
  str.toLowerCase().split('').forEach((_,index,array)=> (array[index-1] == l && array[index]!=  ' ' && (array[index] >= 'a' && array[index] <= 'z')) ?returnString += str.split('')[index]: '')
  return returnString
}
console.log(comes_after("Every Sunday, she reads newspapers.",'s'))