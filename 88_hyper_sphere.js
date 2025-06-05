//6 kyu Hyper Sphere
function inSphere(coords, radius) {
  if (coords.length > 0){
    return coords.reduce((acc,c) => acc+= c**2,0) <= radius**2;
  }
  return true
}
console.log(inSphere([66.14272,66.57249,0.42063,48.18087,15.88034,15.90368], 90))