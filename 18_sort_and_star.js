//sort and star
sortAndStarString = ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]
function twoSort(s) {
  return s.sort()[0].split('').join('***')
}