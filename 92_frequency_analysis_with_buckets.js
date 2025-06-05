function bucketize(arr) {
  let obj = {};
  arr.forEach((element) => {
    if (obj[element]) {
      obj[element] += 1;
    } 
    else {
      obj[element] = 1;
    }
  });
  returnArray = []
  for (i=0;i<=arr.length;i++){
    returnArray.push(null)
  }
  for (pairs in obj){
    if(returnArray[obj[pairs]] == null){
        returnArray[obj[pairs]] = [Number(pairs)]
    }
    else{
        returnArray[obj[pairs]].push(Number(pairs))
    }
  }
  return returnArray;
}

inputArrTwo = [4,4,8,8]
console.log(bucketize(inputArrTwo))