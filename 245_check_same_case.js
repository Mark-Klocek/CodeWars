// Description:

// Write a function that will check if two given characters are the same case.

//     If either of the characters is not a letter, return -1
//     If both characters are the same case, return 1
//     If both characters are letters, but not the same case, return 0

// Examples

// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1
function sameCase(a, b){

    //setting both variables to their char code
    let aChar = a.charCodeAt(0)
    let bChar = b.charCodeAt(0)

    //checking to verify both inputs are letters
    if (!(aChar >= 97 && aChar <= 122) && !(aChar >= 65 && aChar <= 90)){
        
        return -1
    }else if (!(bChar >= 97 && bChar <= 122) && !(bChar >= 65 && bChar <= 90)){
        
        return -1
    }
    //checking to see if they are the same case
    if (((aChar >= 97 && aChar <= 122) && (bChar >= 97 && bChar <= 122)) || ((aChar >= 65 && aChar <= 90) && (bChar >= 65 && bChar <= 90))){
        return 1
    } 
    //if cases dont match, returning 0
    return 0;
}

console.log(sameCase("C","c"))