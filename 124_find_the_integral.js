//8 kyu Find the Integral
function integrate(coefficient, exponent) {
  return `${coefficient / (exponent + 1)}x^${exponent+1}`
}
console.log(integrate(12,5))