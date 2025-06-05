// Add Length
testString = "you will win"
function addLength(str) {
  return str.split(' ').map((element) => element + ' '+ element.length)
}
console.log(addLength(testString))