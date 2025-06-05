
//7 kyu Friday the 13th part 1
var counselors = [["Mike", 7],["Alysa", 3]]
function killcount(counselors, jason){
  arr = []
  counselors.forEach(element => {
    if (element[1] < jason){
      arr.push(element[0])
    }
  })
  return arr
}
console.log(killcount(counselors, 7))