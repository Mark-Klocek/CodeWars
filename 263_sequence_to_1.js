// Example : 
// n=5  >> [5,4,3,2,1]
// n=-1 >> [-1,0,1]

// Range :
// Python     -9999 < n < 9999
// Javascript -9999 < n < 9999
// c++        -9999 < n < 9999
// Crystal    -9999 < n < 9999
// Ruby       -9999 < n < 9999

function seqToOne(n){
  let returnArray = []

  if (n < 1){
    for(let i = n;i<1;i++){
        returnArray.push(i)
    }
  }else if (n > 1){
    for(let i  = n;i>1;i--){
        returnArray.push(i)
    }
  }
  returnArray.push(1)
  return returnArray
}

console.log(seqToOne(10))