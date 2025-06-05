//Enumerable Magic #1 - True for All?
function all( arr, func ){
  for (i = 0; i < arr.length ; i++){
    if (!func(arr[i])){
      return false
    }
  }
  return true
}
console.log(all([1, 2, 3, 4, 5], function(v) { return v > 9; }))