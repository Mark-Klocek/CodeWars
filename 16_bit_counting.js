//bit counting
var countBits = function(n) {
  let binConvert = n.toString(2)
  let counter = 0
  for (i = 0; i < binConvert.length;i++){
    if (binConvert[i] == 1){
      counter++
    }
  }
  return counter
};