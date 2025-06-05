//7 kyu count the ones
function hammingWeight(x){
  count = 0
  x.toString(2).split('').forEach(element=> element === '1' ? count ++:'')
  return count
}
console.log(hammingWeight(10))