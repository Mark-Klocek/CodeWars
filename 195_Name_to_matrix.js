// Given a name, turn that name into a perfect square matrix (nested array with the amount of arrays equivalent to the length of each array).

// You will need to add periods (.) to the end of the name if necessary, to turn it into a matrix.

// If the name has a length of 0, return "name must be at least one letter"
// Examples

// "Bill" ==> [ ["B", "i"],
//              ["l", "l"] ]

// "Frank" ==> [ ["F", "r", "a"],
//               ["n", "k", "."],
//               [".", ".", "."] ]

//Params: We are given a string that is a name, will it ever be empty? will it always be a string? Do we ever have to convert it>

//Return: we are to turn that string into a perfect matrix of arrays. If the matrix is larger than the letters of hte name, we are to replace each element in the matrix of arrays with a "."

//Example: "Greg" => [[G,r],[e,g]]


function matrixfy(str) {
    //psuedo
    //first thing we want to do is determine how large the return array is going to be
    //we can determine this, by taking the square root of the length of the name, applying ceiling to it, then squaring that number
    //we can iterate through this square matrix by first, iterating through the initial ceiling, then within each of those iterations, iterate again through that cieling, effectively creating a perfect matrix
    //we take the original string, and while iterating, shift the letter off of the string. do an if check to see if the string is empty, if it is, instead of doing the shift, we just set it to a period
    if(str.length < 1){
        return "name must be at least one letter"
    }
    //setting matrixSize as the ceilling of the sqrt of the length of the string
    let matrixSize = Math.ceil(Math.sqrt(str.length))
    let returnArray = []
    //making str into an array so i can do a length check later in the array
    str = str.split('')

    //iterating creating inner arrays tempArray
    for(let i = 0;i<matrixSize;i++){
        tempArray = []
        //within each innerarray
        for(let j = 0; j<matrixSize;j++){
            //if the str array(which is hte name) is not empty, we shift the first letter off and push it onto the inner array
            if(str.length > 0){
                let c = str.shift()
                tempArray.push(c)
            }else{
                //else if the string array (name) is now empty, we can push a "."onto the temp array
                tempArray.push('.')    
            }
            
        }
        //pushing the created temp array onto the returnArray
        returnArray.push(tempArray)
    }
    
    
    
    return returnArray

    
}

console.log(matrixfy("wow"))