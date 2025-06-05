//Take an Arrow to the knee, Functionally
const arrowFunc = function(arr) {
  return arr.map(element =>String.fromCharCode(element)).join('');
}
console.log(arrowFunc([84,101,115,116]))