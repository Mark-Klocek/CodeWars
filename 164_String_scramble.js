// Given a string and an array of indices, rearrange the characters of the string so that each character is placed at the position specified by the corresponding index in the array.
// Examples

// Input: 'abcd', [0, 3, 1, 2]

// Output: 'acdb'

// Explanation:

//     The character 'a' is placed at index 0.

//     The character 'b' is placed at index 3.

//     The character 'c' is placed at index 1.

//     The character 'd' is placed at index 2.

// Notes

//     The string and the array will always be of equal length.

//     Both the string and the array will contain valid characters (A-Z, a-z, or 0-9).

//P: We are given two inputs - the original string, and an array of indices that match with the original array. Will one string ever be manipulated more than once? Wil there ever be an index given in the array that is outside of the range of the string? For example if a string is '1234' will there be a 4 in the index array?

//R: We are returning a string that has been mixed by our function using the original input string and array

//E: For example, if we are given a string '1234' and an array [3,2,1,0], we should return a string of '4321'
function scramble(str, arr) {
    
    //P:split original string into array 
    //create empty array
    //iterate through given array
    //push the string element at givenarray i onto return string
    //returnstring
    str = str.split('')
    let returnString = [...str]
    for (let i = 0;i<arr.length;i++){
        returnString[arr[i]] = str[i]
    }
    
    return returnString.join('')

};


console.log(JSON.stringify(scramble('abcd', [0, 3, 1, 2])) === JSON.stringify('acdb'));
console.log(JSON.stringify(scramble('dcba', [3, 2, 1, 0])) === JSON.stringify('abcd'));
console.log(JSON.stringify(scramble('mark', [2, 0, 3, 1])) === JSON.stringify('akmr'));
console.log(JSON.stringify(scramble('1234', [1, 3, 0, 2])) === JSON.stringify('3142'));
console.log(JSON.stringify(scramble('test', [0, 1, 2, 3])) === JSON.stringify('test'));
console.log(JSON.stringify(scramble('code', [2, 3, 1, 0])) === JSON.stringify('edoc'));
console.log(JSON.stringify(scramble('cool', [3, 2, 1, 0])) === JSON.stringify('look'));
console.log(JSON.stringify(scramble('wow!', [1, 2, 3, 0])) === JSON.stringify('ow!w'));
console.log(JSON.stringify(scramble('xy', [1, 0])) === JSON.stringify('yx'));
console.log(JSON.stringify(scramble('hello', [4, 3, 2, 1, 0])) === JSON.stringify('olleh'));
