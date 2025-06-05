//7 kyu mumbling
function accum(s) {
	return s.split('').map((element,index)=>{
    arr = []
    for(i=0;i<=index;i++){
      if (i==0){
        arr.push(element.toUpperCase())
      }
      else{
        arr.push(element.toLowerCase())
      }
    }
    return arr.join('')
  }).join('-')
}
console.log(accum("ZpglnRxqenU"))