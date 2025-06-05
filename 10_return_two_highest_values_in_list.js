//Return Two Highest Values in List
function twoHighest(arr) {
  let arrSet = new Set(arr);
  let newArr = Array.from(arrSet)
  if (newArr.length > 2){
      
      return (newArr.sort((a,b)=>b-a).slice(0,2))
  }
  return arr.sort((a,b)=> a-b)
  
}