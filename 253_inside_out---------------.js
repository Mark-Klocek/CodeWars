// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

// Words will be separated by exactly one space and there will be no leading or trailing spaces.

let testString = 'man i need a taxi up to ubud windows'
function insideOut(x){
    x = x.split(' ')
    let returnMap = x.map((element,index,array)=>{
        if (element.length > 3){
            // splitting word into array and determining it's length
            let splitWord = element.split('')
            
            // iterating over the words in the array
            splitWord.forEach((e,i)=>{
                console.log(i)
                //if even
                if (element.length % 2 === 0){
                    if(i < element.length / 2 -1){
                        let temp = splitWord[i+1]
                        splitWord[i+1] = splitWord[i]
                        splitWord[i] = temp
                    }else if (i > element.length){
                        let temp = splitWord[i]
                        splitWord[i] = splitWord[i+1]
                        splitWord[i+1] = temp
                    }    
                }else{
                    //console.log(element.length, e)
                }

            })
            return splitWord.join('')
        }
        return element
    })
    return returnMap
}

console.log(insideOut(testString) , testString)