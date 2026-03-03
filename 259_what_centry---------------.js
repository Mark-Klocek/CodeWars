// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
// Examples

// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year){
    //convert to number
    // if number % 10 === 0 we can use number / 100 as the century
    // if number % 10 !== 0, we can do ceiling to find which century it is
    // use the century to determine suffix
    let yearNumberTotal = Number(year)
    let yearNumber = 0
    if (yearNumberTotal % 10 == 0){
        yearNumber = yearNumberTotal / 100
    }else{
        yearNumber = Math.ceil(yearNumberTotal / 100)
    }
    yearNumber = yearNumber.toString()
    console.log(yearNumber[yearNumber.length -1])
    //now we need to determine suffix
    let suffix = "th"
    if ((yearNumber[yearNumber.length -1] == 2) && (yearNumberTotal < 1001 || yearNumberTotal > 2000)){
        suffix = "nd"
    }else if((yearNumber[yearNumber.length -1] == 3) && (yearNumberTotal < 1001 || yearNumberTotal > 2000)){
        suffix = "rd"
    }
    //2nd 3rd 4th 5th 6th 7th 8th 9th 0th
    return yearNumber + suffix

  
}
console.log(whatCentury("1101"))