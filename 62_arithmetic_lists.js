//7 kyu Arithmetic List!
var seqlist = function(first,c,l){
  let arr = [first]
  for (i=0;i<l-1;i++) arr.push(arr[i]+c)
  return arr
}