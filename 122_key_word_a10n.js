//6 kyu Word a10n (abbreviation)
function abbreviate(string) {
  let stringArray = string.split('')
  let wordArray = []
  let word = ''
  
  stringArray.forEach(element =>{
    if ((element >= 'a' && element <= 'z') || (element >= 'A' && element <= 'Z')){
      word += element
    }
    else{
      wordArray.push(word)
      wordArray.push(element)
      word = ''
    }
  })
  if (wordArray[wordArray.length - 1] !== word){
    wordArray.push(word)
  }
  
  word = ''
  wordArray.forEach((element,index)=>{
    if (element.length >= 4){
    wordArray[index] = `${element[0]}${element.length - 2}${element[element.length -1]}`
    }
  })
  return wordArray.join('')
}
console.log(abbreviate("Go"))