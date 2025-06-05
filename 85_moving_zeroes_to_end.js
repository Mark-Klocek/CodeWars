//5 kyu Moving Zeroes To The End
function moveZeros(arr) {
    let nonZeroArray = []
    let zeroArray = []
    arr.forEach((element,index)=>element === 0 ? zeroArray.push(element):nonZeroArray.push(element))
    zeroArray.forEach(element => nonZeroArray.push(element))
    return nonZeroArray
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))