//The 'spiraling' box NOTE: We are trying to find out how far away from the edge we are here.
function createBox(m, n) {
  returnArray = []
  for (let i =0; i < n; i++){
    pushArray = []
    for(let j = 0; j<m;j++){
      pushArray.push(Math.min(i,j,n-1-i,m-1-j)+1)
    }
    returnArray.push(pushArray)
  }
  return returnArray
}
console.log(createBox(5,5))