//CSV representation of array
function toCsvText(array) {
  returnString = ''
  for (i = 0; i < array.length; i++){
    if (i < array.length -1){
      returnString += array[i].join(',')
      returnString += '\n'
    }
    else{
      returnString += array[i].join(',')
    }
  }
   return returnString
}
console.log(toCsvText([[ 0, 1, 2, 3, 45 ],[ 10,11,12,13,14 ],[ 20,21,22,23,24 ],  [ 30,31,32,33,34 ]]))