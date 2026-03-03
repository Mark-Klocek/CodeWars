// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []

// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

let testArray = [0, 1, 3, 6, 10]

function partsSums(ls) {
    let returnArray = []

    while (ls.length > 0){
        console.log(ls)
        let total = ls.reduce((c,t)=> t+= c,0)
        returnArray.push(total)
        let shifter = ls.shift()
    }
    returnArray.push(0)
    return returnArray
}

console.log(partsSums(testArray))

console.log(partsSums(testArray)==[20, 20, 19, 16, 10, 0])