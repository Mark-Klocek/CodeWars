//Your order, please
function order(words){
  let brokenArray = words.split(' ')
  let newArray = []
  brokenArray.forEach((element) =>{
    for (i = 0; i < element.length ; i++){
      if (!isNaN(element[i])){
          newArray[element[i]-1] = element

      }
    }
    
  })
  return newArray.join(' ')
  
}
