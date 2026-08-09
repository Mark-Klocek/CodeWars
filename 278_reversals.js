// You are an up and coming commentator in the brutal world of pro wrestling. However, you suck at telling who reversed the reversal.

// You will be provided with a string in the format of : "X hit a reversal to Y hit a reversal to X...... hit a reversal to (X/Y)"

// Rules:

// •The string starts and ends with the respective names of the wrestlers (Not necessary that the starting and ending names be the same).

// •Input will always be validated.

// •X and Y will either be letters or single words.

// Determine and return the victor of the match.

// Be careful. Your job is on the line!


let testString = "Alpha hit a reversal to Bravo hit a reversal to reversal Alpha"
function whowon(s) {
    s = s.split(' ')
    let firstWrestler = s[0]
    let secondWrestler = s[5]
    let reverseCount = 0
    s.forEach(e=> e == "reversal" ? reverseCount++:'')
    
  return reverseCount % 2 != 0 ? firstWrestler : secondWrestler
}



console.log(whowon(testString))