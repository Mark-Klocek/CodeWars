//7 kyu Powers of 3
function largestPower(n){
  let k = 0
  while (3**k < n){
    k += 1
  }
  return k-1
}
console.log(largestPower(3))