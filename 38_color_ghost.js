//Color Ghost
let Ghost = function() {
  possibleColors = ['white','yellow','purple','red']
  this.color = possibleColors[Math.floor(Math.random()*possibleColors.length)]
};
//Playing with cubes II