// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

//P We are given an array with values containing several things, but the one we are looking for is true

//R: We are returning the amount of "sheep that are in place" (basically means true)

//E: we are given ["true","false","undefined"] => 1


function countSheeps(sheep) {
  // iterate over the array, if the current element is true, we add it to return value
  // return value of total amount of true in the array
    let returnCount = 0
  sheep.forEach(e=>{
    if (e == true) returnCount ++
  })
  return returnCount
}