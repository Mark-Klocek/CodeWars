//7 kyu Heron's formula
function heron(a, b, c) {
  let g = (a + b + c)/ 2
  return Math.sqrt(g * (g-a) * (g-b)*(g-c))
}
console.log(heron(4, 4, 4))