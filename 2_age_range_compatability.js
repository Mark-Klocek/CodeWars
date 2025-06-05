// age range compatability
function datingRange(age){
  if (age <= 14){
    let min = age - 0.10 * age
    let max = age + 0.10 * age
    return `${Math.floor(min)}-${Math.floor(max)}`;
  }
  let min = (age/2) + 7
  let max = 2 * (age - 7)
  return `${Math.floor(min)}-${Math.ceil(max)}`;
}