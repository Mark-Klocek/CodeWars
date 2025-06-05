// how good are you really?
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > ((classPoints.reduce((acc,c)=> acc += c,0))/classPoints.length)
}