//Array Array Array
function explode(x){
  numCounter = 0
  let total = x.reduce((acc,c) =>{
    if (!isNaN(c)){
      acc += c
      numCounter ++
    }
    return acc
  },0)
  returnArray = []
  for (i=1; i <= total; i++){
    returnArray.push(x)
  }
  if (numCounter == 0){
    return 'Void!'
  }
  return returnArray
}
console.log(explode(['a','b32']))