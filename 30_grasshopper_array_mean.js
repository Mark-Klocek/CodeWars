//Grasshopper - Array mean
testArray = [1, 3, 5, 7]
function findAverage(nums) {
  return (nums.reduce((acc,c) => acc += c,0)/nums.length)
}