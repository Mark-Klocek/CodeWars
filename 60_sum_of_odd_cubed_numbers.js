//7 kyu Sum of Odd Cubed Numbers
function cubeOdd(arr) {
  if (arr.some(element => typeof element != 'number')){
    return undefined
  }
  return arr.reduce((acc,c)=> {
    if (c % 2 != 0){
      acc += Math.pow(c,3)
    }
    return acc
  },0)
}
console.log(cubeOdd(["a",12,9,"z",42]))