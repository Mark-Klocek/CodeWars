//7 kyu Geometric sequence - sum of all elements
function geometricSequenceSum(a, r, n) {
  arr = [a]
  
  for (i = 0;i<n-1;i++){
    arr.push(arr[i]*r)
  }
  return arr.reduce((acc,c)=>acc+=c,0)
}
console.log(geometricSequenceSum(1, -2, 10))