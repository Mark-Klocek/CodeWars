function encode(str) {
  
  return str.split('').map((element)=> {
    if (element.toLowerCase().charCodeAt(0)-96 < 0 || element.toLowerCase().charCodeAt(0)-96 > 26){
      return element
    }
    else{
      return element.toLowerCase().charCodeAt(0)-96
    }
  } ).join('')
}
console.log(encode("!@ZSDW%^&*()_-{}{}{}{}{"))