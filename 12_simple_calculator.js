//simple calculator 
function calculator(a,b,sign){
  if (sign !== '+' && sign !== '-' && sign !== '*' && sign !=='/'){
    return "unknown value"
  }
  if (isNaN(a) || isNaN(b)){
    return 'unknown value'
  }
  if (sign === '*'){
    return (a * b)
  }
  else if (sign === '+'){
    return (a + b)
  }
  else if (sign === '-'){
    return (a-b)
  }
  else if (sign === '/'){
    return (a/b)
  }
}