//Search for letters
function change(string){
  binaryString = []
  for (i=1;i<=26;i++){
    binaryString.push(0)
  }
  loweredString = string.toLowerCase()
  for(i = 0; i < loweredString.length; i++){
    if (loweredString[i] >= 'a' && loweredString[i] <= 'z'){
      index = loweredString[i].charCodeAt(0) - 'a'.charCodeAt(0)
      binaryString[index] = 1
    }
  }
  return(binaryString.join(''))
}