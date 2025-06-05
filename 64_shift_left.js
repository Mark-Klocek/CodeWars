//7 kyu shift left
function shiftLeft(s, t){
  let i = 0
  while (s !== t){
    
    s.length >= t.length ? s = s.slice(1) : t = t.slice(1)
    i++ 
  }
  return i
}
console.log(shiftLeft('1','1'))