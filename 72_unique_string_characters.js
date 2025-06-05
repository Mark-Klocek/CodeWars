// 7kyu unique string characters
function solve2(a,b){
  returnString = ''
  a.split('').forEach(element=>!b.split('').includes(element) ? returnString += element: '')
  b.split('').forEach(element=>!a.split('').includes(element) ? returnString += element: '')
  return returnString
};
console.log(solve2("xyab","xzca"))