// Name Array Capping
function capMe1(names) {
  return names.map((element,_) => {
    splitElement = element.split('')
    return splitElement.map((element,index)=> index == 0? element = element.toUpperCase():element = element.toLowerCase()).join('')
     
    
  })
}
function capMe(names){
  return names.map((element) => element.charAt(0).toUpperCase() + element.substring(1).toLowerCase())
}
console.log(capMe(['JOE', 'neNeLsOnlson', 'JuRiE']))