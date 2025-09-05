// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.
// Examples

// If a = [1, 2] and b = [1], the result should be [2].

// If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

//p We are given two arrays, a parent (a) and a child (b)

//R We are to return the parent, filtered of all elements in the child array

//E: if a = [1,2,3,4] and b = [2,3] => [1,4]


let a = [1,2,3,4,5]

let b = [1,23,2]


function arrayDiff(a, b) {
  
//Psuedo
//iterate through array b
// have a = itself filtered for nothing in the element we are on for b
    let returnArray = []


    b.forEach(childElement=>{
        a = a.filter(element => element != childElement)
    })



    return a




}

console.log(arrayDiff(a,b))