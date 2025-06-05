// pick a set of first elements
function first(arr, n=1) {
  returnArray = []
  for (i=0;i<n;i++){
    if (returnArray < arr){
      returnArray.push(arr[i])
      }
    else{
      return returnArray
    }
  }
  return returnArray
}
console.log(first(testArray),4)