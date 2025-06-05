// 7 kyu latin square
function makeLatinSquare(n) {
  returnArr = []
  arr1 = []
  for (i=1;i<=n;i++){
    arr1.push(i)
    }
  for(i=0;i<n;i++){
    let arr2 = [...arr1]
    let shifted = arr2.shift()
    arr2.push(shifted)
    
    arr1 = arr2
    returnArr.push(arr2)
  }  
  
  
  return returnArr;
}
console.log(makeLatinSquare(7))