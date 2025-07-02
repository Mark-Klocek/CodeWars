// Given an n by n grid filled with lowercase x's and periods (.), return the minimum number of periods to be replaced with x's in order to form a continuous, straight, n-length path of x's, from either: side to side, top to bottom, or diagonally.
// Input and Output:

//     Input: a string formatted as an n by n grid filled with randomly placed lowercase x's and periods. Each line of the grid is separated from the next by a linebreak.

//     Output: a number between 0 and n, inclusive. The return number represents the minimum number of periods to be replaced with x's to obtain a straight n-length path of x's.

// Example:

//     Input:

//   ..x..
//   .....
//   .....
//   ..x..
//   xx..x 

//     Output: 2

let str = "..x..\n.....\n.....\n..x..\nxx..x"
//let str = "..x\n...\nx.."
//let str = "...\n...\n..."
//let str = "x..\nx..\nx.x"
//let str = "....\n..x.\n.x..\n...."
//let str = "....\n..x.\nx...\n...."
//let str = ".....\n..x..\n.....\n..x..\nxx.xx"
function minXPath(grid) {
    let gridArray = grid.split('\n')
    return gridArray
}

console.log(minXPath(str))