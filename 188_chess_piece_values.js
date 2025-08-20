
// Having the estimated value of each piece. This is a rough estimation and the real piece value depends on other factors in game as well ,such as the game being a closed or open one, which can favor either knights or bishops. (If you are interested more about that here: open vs closed game.) But for our purposes we will use the mentioned values.
// Note: the value of a king cannot be estimated because without it the game would be over, so DO NOT take into consideration the value of the king.You will not be tested for invalid input.
// Example case:

// piecesValue([[' ',' ',' ',' ',' ',' ',' ',' '],
//              [' ',' ','b-queen',' ',' ',' ',' ','w-queen'],
//              [' ','b-king',' ',' ','w-rook',' ',' ',' '],
//              [' ',' ',' ',' ',' ',' ',' ',' '],
//              [' ',' ',' ',' ',' ',' ',' ',' '],
//              ['w-king',' ',' ',' ',' ',' ',' ',' '],
//              [' ',' ',' ',' ',' ',' ',' ',' '],
//              [' ',' ',' ',' ',' ',' ',' ',' ']], 
//              'white');
// //should be 14 since white has a queen and a rook 
// //while the same table would return 9 for 'black'

// piecesValue([[' ',' ',' ',' ',' ',' ',' ',' '],
//              [' ',' ','b-queen',' ',' ',' ',' ','w-queen'],
//              [' ','b-king',' ','b-pawn','w-rook',' ',' ',' '],
//              [' ',' ',' ',' ','w-pawn',' ',' ',' '],
//              [' ',' ',' ',' ',' ','w-bishop',' ',' '],
//              ['w-king',' ',' ',' ',' ',' ',' ',' '],
//              [' ',' ',' ','b-pawn',' ',' ',' ',' '],
//              [' ',' ',' ',' ',' ',' ',' ',' ']],
//              'white');
// //should return 18 for 'white' (queen, rook, pawn, bishop)
// //and 11 in case s is 'black'(queen, pawn, pawn)

const hash = Object.freeze({
  queen: 9, rook: 5, bishop: 3, knight: 3, pawn: 1
});
//P We are given an array, and a string either black or white. 

//R We are returning a number value for the total points of team either W or B - which is the 2nd argument of the function

//E: 

    //for white should return 14, w queen + w rook = 14


function piecesValue(arr, s) {
    //Psuedo
    //We need to initiate a white and a black to keep track of which total the user wants
    //iterate through the array of arrays
    //for each array, we want to iterate through each element, if said element.length > 0, we can then go into our function logic
    //first, we can split the string by the '-' character. then we can set a variable "value" that matches with whatever the string is in the 2nd elemetn of the newly created array
    //if the first element is w, we add it to white, if hte 2nd element is black, we add it to b
    // then we can either return white or black depending on the 2nd argument entered into the function
    let white = 0
    let black = 0
    arr.forEach(element=>{
        element.forEach(e=>{
            if (e.length > 2 && !e.includes('king')){
                e = e.split('-')
                let valueToReturn = hash[e[1]]
                e[0] === 'b' ? black += valueToReturn : white += valueToReturn
                
                
            }
        })
    })
    return s === 'white' ? white : black
  
}

console.log(piecesValue([[' ',' ',' ',' ',' ',' ',' ',' '],
             [' ',' ','b-queen',' ',' ',' ',' ','w-queen'],
             [' ','b-king',' ',' ','w-rook',' ',' ',' '],
             [' ',' ',' ',' ',' ',' ',' ',' '],
             [' ',' ',' ',' ',' ',' ',' ',' '],
             ['w-king',' ',' ',' ',' ',' ',' ',' '],
             [' ',' ',' ',' ',' ',' ',' ',' '],
             [' ',' ',' ',' ',' ',' ',' ',' ']], 
             'white'));