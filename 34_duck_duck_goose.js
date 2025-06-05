//duck duck goose
function duckDuckGoose(players, goose) {
  while (goose > Object.keys(players).length){
    goose -= Object.keys(players).length
  }
  return players[goose-1].name
}
console.log(duckDuckGoose(['a', 'b', 'c', 'd'], 17))