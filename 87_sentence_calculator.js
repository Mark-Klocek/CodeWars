//6 kyu Sentence Calculator
function lettersToNumbers(s) {
    letterArray = []
    s.split('').forEach(element => {
        if ((element >= 'A' && element <= 'Z') || (element >= 'a' && element <= 'z')){
            letterArray.push(element)
        }
        else if (!isNaN(Number(element))){
            letterArray.push(element)
        }
    })
    accumulator = 0
    letterArray.forEach(element => {
        if (element >= 'A' && element <= 'Z'){
            accumulator += (element.toLowerCase().charCodeAt(0) - 96) * 2
        }
        else if (element >= 'a' && element <= 'z'){
            accumulator += (element.toLowerCase().charCodeAt(0) - 96)
        }
        else if (!isNaN(Number(element))){
            accumulator += Number(element)
        }
        else{
            ''
        }
    })
    return accumulator
}

console.log(lettersToNumbers("Give me 5!"))