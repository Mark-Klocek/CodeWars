// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

let n = 5
const reverseSeq = n => {
    let returnArr = []
    for(let i = 1;i <= n; i++){
        returnArr.push(i)
    }
    return returnArr.reverse()
  
};

console.log(reverseSeq(n))