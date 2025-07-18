// 6 kyu Most Consecutive Zeros of a Binary Number
function maxConsecZeros(n){
    const numbersToWords = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
  20: "Twenty"
    }
  nBinary = Number(n).toString(2)
  binaryList = nBinary.split('')
  currentStreak = 0
  highestStreak = 0
  console.log(binaryList)
  binaryList.forEach((element) => {
  if (element === '0') {
    currentStreak++;
  } else {
    highestStreak = Math.max(highestStreak, currentStreak);
    currentStreak = 0;
  }
})
  
  highestStreak =  Math.max(currentStreak,highestStreak)
  return numbersToWords[highestStreak]
}
console.log(maxConsecZeros("180"))