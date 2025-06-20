
console.log('js138')
// Description:

// Array Exchange and Reversing

// It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed. The arrays may be of unequal lengths, in which case you will have to expand the shorter one in-place.

// # before
// my_array = ['a', 'b', 'c']
// other_array = [1, 2, 3]

// exchange_arrays(my_array, other_array)

// # after
// my_array == [3, 2, 1]
// other_array == ['c', 'b', 'a']

//P: We wil be given two arrays - will it always be two? 

//R: Return the arrays reversed and in switched positions

//E:
let a = ['a', 'b', 'c']
let b = [1, 2, 3]

// let a = [10, 20, 30, 40]
// let b = ['x', 'y']

// let a = []
// let b = ['apple', 'banana']

// let a = [true, false]
// let b = [null, undefined, 0, '']

// let a = ['start']
// let b = [100, 200, 300, 400, 500]

// let a = ['x', 'y', 'z']
// let b = []

// let a = [1]
// let b = ['only']

// let a = [1, 2]
// let b = [3, 4, 5, 6, 7, 8]

// let a = ['alpha', 'beta']
// let b = ['gamma', 'delta', 'epsilon']

// let a = [null, null]
// let b = [0, 0, 0]

function exchangeWith(a, b) {
    let temp = [...a]
    a.length = 0
    a.push(...b)
    a.reverse()
    b.length = 0
    b.push(...temp)
    b.reverse()
}

console.log(exchangeWith(a,b))