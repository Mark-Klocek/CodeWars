function eachCons(array, n) {
  finalArray = []
	for (i = 0; i < array.length; i++){
    if (i + n <= array.length){
      finalArray.push(array.slice(i,n+i))
    }
    else{
      return finalArray
    }
  }
  return finalArray
  
}
console.log(eachCons(testArray,1))