// How many stairs will suziki climb in 20 years?
function stairsIn20(s){
  return ((s.reduce((acc, c) => acc += c.reduce((acc,c) => acc += c,0),0)) * 20)
}