// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0

function noBoringZeros(n) {
    let splitNum = n.toString().split('')
    while (splitNum[splitNum.length - 1]== 0){
        let zero = splitNum.pop()
    }
    return Number(splitNum.join(''))
}

console.log(noBoringZeros(92130000))