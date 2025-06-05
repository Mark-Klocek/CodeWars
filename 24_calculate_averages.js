// Calculate Averages

function findAverage(array) {
  return array.length > 0 ?array.reduce((acc,c) => acc+= c,0) / array.length : 0
   
}