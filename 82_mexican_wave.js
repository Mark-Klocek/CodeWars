//6 kyu Mexican Wave
function wave(str){
  
  returnArr = []
  for (i=0;i<str.length;i++){
    
    let arr = [...str]
    if (arr[i].charCodeAt(0) -96 > 0 && arr[i].charCodeAt(0) - 96 < 27){
      arr[i] = arr[i].toUpperCase()
      returnArr.push(arr.join(''))
    }
    
  }
  return returnArr
}
console.log(wave("two words"))