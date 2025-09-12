// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example (Input => Output):

// 35231
// 0     => [0]

function digitize(n) {
  
  
  let stringArray = String(n).split('').reverse()
  return stringArray.map(element => +element)
  
  
  
  
  
}