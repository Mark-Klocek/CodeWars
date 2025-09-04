// Given a 10x10 grid of 100 cells, with columns indexed 0 to 9 (left to right) and rows indexed 0 to 9 (bottom to top). The input of your program will be a comma-separated string of cell identifiers, identifyng the cells that are coloured black. Each cell identifier is a two digit number of the form <column_index><row_index>.

// For example, an input of 18,00,95,40,36,26,57,48,54,65,76,87,97,47 represents the following grid:

// When given this input, your program should output the size of the largest block of connected black cells, witch is outlined in red in the example above. So in this case your program would return 3.

// Note that two black cells are considered to be connected if they share an edge, but they are not connected if the share only a corner.

// The input could have some cells with invalid format or repeated cells that should not be taken into account.

// For example: 00,00,111,1,1a is the same as 00


//Parameter - we are given a string of numbers that are comma separated and two digits long

//Return - we want to return the largest amount of connected blocks, they are connected on their sides not corners

//E: 18,00,95,40,36,26,57,48,54,65,76,87,97,47 => 3

const input = "18,00,95,40,36,26,57,48,54,65,76,87,97,47,0,sds,123,233,0a1,1a,00,18"


function solution(input) {
    //p initiate biggestsquare to 0
    //create a set of valid numbers
    //iterate each number, use queue stack and visited array for each forEach on the valid number array
    //while queue > 0
    // add element as first element of queue
    // check first element of queue top, bottom, left, right
    // if any of those numbers both exist in the parent array and do not exist in the visited array, add it to the queue
    // have a while function iterate over the queue until its length is 0
    // constantly adding top left right and bottoms for each element that is attached to the element before will create the biggest possible square
    
    
    let biggestSquare = 0
    let visitedArray = new Set

    input = input.split(',')
    let numberSet = new Set(input.filter((element) => {

        if ((Number(element) >= 0 && Number(element) <= 99) && (element.length > 1 && element.length < 3)) {

            return element
        }
    }))

    numberSet = new Set([...numberSet].map(Number));

    numberSet.forEach(element=>{
        let currentSize = 0
        let queue = [element]
        
        while(queue.length > 0){
            let nbrs = new Array
            let current = queue.shift()
            if (visitedArray.has(current)) continue;
            visitedArray.add(current)
            currentSize += 1
            let column = Math.floor(current / 10)
            let row = current % 10
            if (row < 9) nbrs.push(current + 1)
            if (row > 0) nbrs.push(current - 1)
            if (column > 0) nbrs.push(current -10)
            if (column < 9) nbrs.push(current + 10)
            nbrs.forEach((element) =>{
                if(numberSet.has(element) && !visitedArray.has(element)){
                    queue.push(element)
                }
            })
            
            
            

        }
        if(currentSize > biggestSquare) biggestSquare = currentSize






    })
    

    
    return biggestSquare;
}


console.log(solution(input))