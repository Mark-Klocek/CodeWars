//Remove duplicates from list
function distinct(a) {
  let b = new Set(a)
  return Array.from(b);
}