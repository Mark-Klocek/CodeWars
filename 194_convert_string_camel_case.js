// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

//Params we are given a string of words, separated by either dashes or underscores. Wil there always be at least two words? Will any words have multiple capital letters?

//Return: We are returning the string that we were given, but instead of dashes and underscores, the string will be of camelCase. Also, if the first word in the string starts with a capital, it will stay a capital.

let str = "The_Stealth-Warrior"

//Example: "this-is_a-sentence" => thisIsASentence
function toCamelCase(str){
    //Psuedo
    //replace all - and _ with " "
    //split on " "
    // iterate through that new array
    // leave the first element alone
    // for each element after, put the first character as touppercase
    //rejoin the array
    //return the rejoined version of the array

    
    let returnString = '' //initializing string we want to return

    str = str.replaceAll( "-"," ")//replacing dashes and underscores with empty spaces
    str = str.replaceAll("_", " ")
    
    //splitting the string on the newly created empty spaces
    str.split(' ').forEach((current,index)=>{
        //since we are keeping the first word capitalized if it was already capitalized, we can ignore the first word altogether
        if(index === 0){
            returnString += current
        }else{
            //if it is not the first word, we need to split the word, capitalize the first word, then rejoin it. concatenate the newly crafted word onto the return array
            current = current.split('')
            current[0] = current[0].toUpperCase()
            returnString += current.join('')
        }
    })
    
    return returnString
}

console.log(toCamelCase(str))