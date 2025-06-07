function add(a, b) {
  a = a.split('')
  b = b.split('')
  let answer = ''
  while (a.length !== b.length){
    a.length > b.length ? b.unshift(0) : a.unshift(0)
  }
  carryNumber = 0
  for (let i = a.length-1;i>=0;i--){
    aElement = Number(a[i])
    bElement = Number(b[i])
    totalSum = aElement + bElement + carryNumber
    console.log(totalSum)
    if (i == 0){
        answer += String(aElement+bElement+carryNumber).split('').reverse().join('')
    }
    else if (totalSum > 9){
        answer +=String(totalSum).split('').pop()
        carryNumber = 1
    }
    else if (totalSum < 10){
        answer += String(totalSum)
        carryNumber = 0
    }

    
    
    
  }
  



  return answer.split('').reverse().join('')
  
}
//
let myAnswer = add('888', '222')
console.log(myAnswer)