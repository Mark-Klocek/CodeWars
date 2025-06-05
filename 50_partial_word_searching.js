//Partial Word Searching
function wordSearch(query, seq){
  let arr = []
  arr = seq.filter((element) => element.toLowerCase().includes(query.toLowerCase()))
  arr.length === 0 ? arr.push('Empty') : ''
  return arr
}