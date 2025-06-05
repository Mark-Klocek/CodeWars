//7 kyu cats in hats
function height(n) {
  totalCat = 2000000
  previousCat = 2000000
  for (i=0; i<n;i++){
    currentCat = previousCat / 2.5
    previousCat = currentCat
    totalCat += currentCat
    
  }

  return totalCat.toFixed(3)
}
console.log(height(7))