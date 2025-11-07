console.log('219')

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.
function count(string) {
    let returnObj = {}
    
    string = string.split('')
    string.forEach((element) => {
        if (returnObj[element]){
           returnObj[element] += 1
        }else{
            returnObj[element] = 1
        }
    })

    return returnObj;
}

console.log(count('thisIsAString'))