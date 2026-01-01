// Rules of the "Rock, Paper, Scissors" game are:

//     Rock beats Scissors,
//     Scissors beat Paper,
//     Paper beats Rock,
//     Two identical moves are a draw.

// Let's play! You will be given valid moves of two Rock, Paper, Scissors players, and have to return which player won: "Player 1 won!" for player 1, and "Player 2 won!" for player 2. In case of a draw return Draw!.

const rps = (p1, p2) => {
    if (p1 == p2) return "Draw!"
    else if(p1 == 'scissors' && p2 == 'paper') return "Player 1 won!"
    else if(p1 == 'paper' && p2 == 'rock') return "Player 1 won!"
    else if(p1 == 'rock' && p2 == 'scissors') return "Player 1 won!"
    else return "Player 2 won!"
};