//8 kyu Speedcode#2 - Array Madness
function arrayMadness(a, b) {
  return a.reduce((acc,c) => acc+= c**2,0) > b.reduce((acc,c)=>acc+= c**3,0)
}
console.log(arrayMadness([4,5,6],[1,2,3]))