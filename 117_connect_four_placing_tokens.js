//6 kyu connect four - placing tokens
function connectFourPlaceTokens(columns) {
  let gamePiece = 'Y'
  gameBoard = []
  for (let i = 0;i<6;i++){
    row = []
    for (let j = 0; j < 7;j++){
      row.push('-')
    }
    gameBoard.push(row)
  }
  columns.forEach(element =>{
    let bottom = 5
    while (bottom >= 0){
      if (gameBoard[bottom][element] == '-'){
        gameBoard[bottom][element] = gamePiece
        if(gamePiece == 'Y') gamePiece = 'R'
        else if (gamePiece == 'R') gamePiece = 'Y'
        break
        
      }
      bottom --
    }
  })
  return gameBoard

}
let columns = [0,0,0,0,0,0,0,0,0,0]
console.table(connectFourPlaceTokens(columns))