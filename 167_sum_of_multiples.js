// Your Job

// Find the sum of all multiples of n below m
// Keep in Mind

//     n and m are natural numbers (positive integers)
//     m is excluded from the multiples

// Examples

// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"


//P: we are given two integers, will there only be 2? will they ever be negative? will they ever be strings? 

//R: returning an integer

//E: given numbers 2 and 10, you should return an integer of 2 + 4+ 6 + 8 = 20
let n = 2
let m = 10
function sumMul(n,m){
//P:
// if m < n, return "INVALID"
// do while up starting at n
// while n < m, accumulator += n
// iterate n by n
let iterater = n
let acc = 0
if (m < n || m === n){return "INVALID"}
while (iterater < m){
    
    
    acc += iterater

   iterater += n 
}
return acc
}

console.log(sumMul(n,m))