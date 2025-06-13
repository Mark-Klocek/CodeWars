// Story

// Alex is a great fan of snooker and he likes recording the results of his favourite players by recording the balls that fall into the pockets of the table. He asks you to help him with a program that calculates the points a player scored in a given set using his notes. Unfortunately, his notes are quite a mess... Sometimes Alex forgets that he already wrote down a color and records it multiple times.
// Task

// Given his short hand notation as string, calculate the points a player scored in a set.

// He codes the ball colors with letters:

// - R  = red     -->  1 point
// - Y  = yellow  -->  2 points
// - G  = green   -->  3 points
// - Bn = brown   -->  4 points
// - Be = blue    -->  5 points
// - P  = pink    -->  6 points
// - Bk = black   -->  7 points
// - W  = white   -->  no points because it's a foul

// The color may be followed by a number, e.g. R12 would stand for 12 red balls pocketed. If there is no number given, the ball was pocketed once.

// Notes:

//     If the string includes the white ball, return 'Foul'
//     If the total score is more than 147, return 'invalid data'

// For your convenience the points for each color are provided as hash / dictionary with the name blz
const blz = {
  R: 1,
  Y: 2,
  G: 3,
  Bn: 4,
  Be: 5,
  P: 6,
  Bk: 7,
  W: 0
};
// You can access the preloaded `blz` dictionary like this: blz["R"]


//P:A string will passed including properties from the blz object, and the number of times that ball was knocked into a hole. It will always be the property followed by the number of times it was hit, unless it was only hit in once, then there will be no number after the letter

//R:Returning a numerical value of points that correlate with the total value of balls hit. if a white ball was hit, return 'Foul'
//  If the points are above 147, return invalid data

//E:
  let score = 'R15P3G1Bk4Y1Bn1Be3'
//  let score = 'R13Bk14YRGBnBkRBePBk1'
//  let score = 'G9G11P9Bn2Bn1Be10G7WBn10G3'
//  let score = 'Bn14Bn14Bn8P9'
function frame(balls) {
    //scan the string to see if W is in the string => if so, return 'Foul'
    //split the string into each different shots
    //split each subsplit into the proper object property, then multiply the value of that property by the number that exists in the subsplit
    //add all of the ball count values together
    //if the value is > 147 return invalid data, otherwise return the score
    if (balls.includes('W')){return 'Foul'}
    color = ''
    colorArray = []
    numberArray = []
    for (let i = 0;i<balls.length;i++){
        if (isNaN(Number(balls[i]))){
            color += balls[i]
        }
        else if (!isNaN(Number(balls[i])) && color.length > 0){
            colorArray.push(color)
            color = ''
        }
    }
    for (let i = 0; i<balls.length;i++){
        
    }
    console.log(colorArray)
  return balls
}
console.log(frame(score))