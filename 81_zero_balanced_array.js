//7 kyu zero-balanced Array
function ìsZeroBalanced(n){
  zeroBalanced = true
  if (n.length == 0) return false
  n.forEach((element,index)=>{
    if (!n.includes(element * -1)){
      zeroBalanced = false
    }
    else{
      delete n[n.indexOf(element * -1)]
    }
  })

  return zeroBalanced
}

console.log(ìsZeroBalanced(([3, -3, 5, -5, 7, -7])))