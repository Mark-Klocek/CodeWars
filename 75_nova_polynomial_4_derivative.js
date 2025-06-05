// 7 kyu nova polynomial 4. derivative
function polyDerivative(p) {
  let arr = []
  p.forEach((element,index)=>{
    if (element * index > 0){
      arr.push(element*index)
    }
  })
  return arr
}
console.log(polyDerivative([9, 1, 3]))