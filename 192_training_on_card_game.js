// Lеt's create function to play cards. You receive 3 arguments: card1 and card2 are cards from a single deck; trump is the main suit, which beats all others.

// You have a preloaded deck (in case you need it):


// Game rules

//     If both cards have the same suit, the higher one wins
//     If both cards have trump, the higher one wins
//     If the cards have different suits and no one has trump, return "Let us play again."
//     If one card has trump, but not the other, the one with the trump wins
//     If there is a winner, return "The first/second card won."
//     If the two cards are the same, return "Someone cheats."
//     The joker always wins

// Examples

// "3♣", "Q♣", "♦"  -->  "The second card won."
// "5♥", "A♣", "♦"  -->  "Let us play again."
// "8♠", "8♠", "♣"  -->  "Someone cheats."
// "2♦", "A♠", "♦"  -->  "The first card won."
// "joker", "joker", "♦"  -->  "Someone cheats."



//P we are given two cards, a trump suit for that card.

//R: We are returning the card which wins according to the given rules

//E: 
let card1 = "3♣"
let card2 = "Q♣"
let trump =  "♦"

//We return let's play again because neither card matches trump or matches suit
const deck = ["joker","2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","10♣","J♣","Q♣","K♣","A♣",
                "2♦","3♦","4♦","5♦","6♦","7♦","8♦","9♦","10♦","J♦","Q♦","K♦","A♦",
                "2♥","3♥","","5♥","6♥","7♥","8♥","9♥","10♥","J♥","Q♥","K♥","A♥",
                "2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠","J♠","Q♠","K♠","A♠"]


function cardGame(card1, card2, trump) {
    //then we check to see if either one is a joker
    //then we check to see if one is a trump card and the other isnt
    //then we chck to see if they have the same suit
    //then we insert checks within all of those to see if one is higher than the other
    let c1suit = card1.slice(-1)
    let c2suit = card2.slice(-1)
    card1 = card1.replace(c1suit,'')
    card2 = card2.replace(c2suit,'')


    if (card1 === card2){
        return 'Someone cheats.'
    }
    //checking if either card is a joker
    if(card1 === 'joker'){
        return 'The first card won.'
    }else if(card2 === 'joker'){
        return 'The second card won.'
    }
    if (card1 == 'J' || card1 === 'Q' || card1 == 'K'){
        card1 = '10'
    }
    if (card1 == 'A'){
        card1 = 11
    }

    if (card2 == 'J' || card2 === 'Q' || card2 == 'K'){
        card2 = '10'
    }
    if (card2 == 'A'){
        card2 = '11'
    }
    //checking to see if both are trumps
    if(c1suit === trump && c2suit === trump){
        
        return +card1 > +card2? 'The first card won.':'The second card won.'
    }

    //checking to see if either one is trump
    if(c1suit === trump && c2suit !== trump){
        return 'The first card won.'
    }else if(c2suit === trump && c1suit !== trump){
        return 'The second card won.'
    }

    //if neither are trump but both have the same suit
    if(c1suit === c2suit){
        return +card1 > +card2? 'The first card won.':'The second card won.'
    }

    //checking to see if they are both the same card
    

    




    return 'Let us play again.';
}   

console.log(cardGame(card1,card2,trump))