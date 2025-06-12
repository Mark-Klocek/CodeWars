// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *

// You need to return the nth triangular number. You should return 0 for out of range values:

// For example: (Input --> Output)

// 0 --> 0
// 2 --> 3
// 3 --> 6
// -10 --> 0

//P: integer, is it a whole number? will it always be a num? will it ever be a string? will we ever pass non number?

//R:return a number

//E
//let n = 10
//  let n = 0
//  let n = 1
// let n = -12
// let n = 2
//let n = 3
function triangular( n ) {
    //P
    // Start top of triangle at n
    // start counter at 0
    // while counter < n add n - counter to a total
    // return total?
    let counter = 0
    let total = 0
    while (counter < n){
        total += n - counter
        counter++
    }

    return total


}
console.log(triangular(n))