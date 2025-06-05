// 7 kyu Magic Index 
function findMagic(arr){
  magicExists = -1
  arr.forEach((element,index)=>{
    if (element === index){
      magicExists = index
    }
    
  })
  return magicExists
  
}
console.log(findMagic([6, 5, 83, 5, 3, 18]))