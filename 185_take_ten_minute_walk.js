// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//     Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//P We are given an array of characters representing directions that one will walk. Will it always be nsew? wil it ever have capital letters? do we have to verify if there are correct inputs?

//R: we are returning a boolean on whether or not the directions would BOTH last only 10 minutes, and return the person back to its starting point

//E: ['n','s'] => false, is not 10 minutes long


function isValidWalk(walk) {
    //P Verify if the walk is 10 length, if not, return false
    //instantiate 4 directions at 0 - north, south, east, west. Since we are starting at 0,0, all directions are 0 away from the starting point.
    //check for each input - we check to see if the opposite is positive, if it is, we remove one from the opposite direction, if not, we add one to current direction
    //return north+south+east+west == 0

    
    //verifying its a valid length route
    if (walk.length !== 10){
        return false
    }

    let north = 0
    let south = 0
    let east = 0
    let west = 0

    walk.forEach(element=>{
        switch(element){
            case 'n':
                if (south===0){
                    north ++
                }else{
                    south--
                }
                break;
            case 's':
                if (north ===0){
                    south++
                }else{
                    north--
                }
                break;
            case 'e':
                if (west ===0){
                    east ++
                }else{
                    west --
                }
                break;
            case 'w':
                if(east ===0){
                    west++
                }else{
                    east--
                }
                break;
            default:
                break;
        }
    })

    return (north+south+east+west === 0)





}
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))