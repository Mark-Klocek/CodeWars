//7 kyu Return substring instance count
function solution1(fullText, search) {
  return fullText.split(search).length -1
}
console.log(solution1("aaabbbccc", "bb"))