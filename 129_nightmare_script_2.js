// NightmareScript is JavaScript without alpha-numeric characters.

// Only permitted characters are:

// ! @ # $ % ^ & * ( ) _ + - | < > . , ' ; : " ` ~ = ? /\ { } [ ]

// Task:

// Using NightmareScript, return an alternating string of 1's and 0's the length of n, starting with '1' if n is odd or '0' if n is even.

// Maximum character length is 30.

// n will always be >= 0

// credit to user AndrewMacmurray for the original Stringy Strings Kata


//P: are they al whole numbers? Are they only positive numbers? Is there going to be word representation of numbers or only numbers? Will they be passed as strings as well or just numbers? The number starts with 0 if its even and 1 if its odd

//R:We are returning a string of 1's and 0's. Always starting with 1? Not always starting with 1! Starting with 0 if the number passed is even, starting with 1 if the number passed is odd! 

//E: 
    //let n = 10
    let n = 99
    //let n = 0
    //let n = 1
$=n=>{
    //P
    //set starting letter to 1 (if we always start at 1)
    //set starting string to blank string
    //for loop that iterates n times
    //each loop add conditional, if i is odd we concantenate a 1, if even we add a 0 (since we start with i at 1)
    //return the final string
    
    let returnString = ''
    
    if (n % 2 == 0){

        for(let i = 1; i <= n; i++){
            i % 2 == 0 ? returnString += '1' : returnString += '0'
        }
    }
    else{
        for(let i = 1; i <= n; i++){
            i % 2 == 0 ? returnString += '0' : returnString += '1'
        }
    }
    return returnString
  
}

console.log($(n))