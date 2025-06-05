// 7kyu Is every value in the array an array?
function arrCheck(arr){
  for (element of arr){
    if (!Array.isArray(element)){
      return false
    }
  }
  return true
}


console.log(arrCheck([[],[]]))