// Campfire Whispers
// Introduction

// In this coding challenge, we will simulate the "Campfire Whispers" game where friends share a movie quote in a circular manner. The friends' moods will affect how they pass along the quote.
// Task Description

// Implement a function that simulates the "Campfire Whispers" game with the following specifications:
// Parameters

//     friends: An array of tuples, where each tuple contains two elements:
//         First element: A string representing the friend's name.
//         Second element: A string representing the friend's mood ("participative," "uninterested," or "excited").
//     quote: A string representing the initial quote (always a movie quote).
//     index: An integer representing the index of the friend in the friends array who we want to ask what they were told.

// Rules

//     Nobody knows the mood of the others, except that of the initiator, who is always participative.
//     Each friend whispers the quote to the next, without the others hearing it.
//     At the end, one of the friends is picked and asked to cite the quote.

// Impact of mood on passing along the quote

//     The first friend initiates the game by sharing a quote.
//     The initiator will simply repeat what they hear from the previous friend.
//     An uninterested friend changes any quote they receive to "Whatever.".
//     An excited friend adds " Wow! That's amazing!" after the quote they heard, but only if the quote doesn't already end with " amazing!" (case-insensitive).
//     A participative friend passes along exactly what they heard from the previous friend, with the following exceptions:
//         If they hear "Whatever.", they use the default quote: "A classic movie quote!".
//         If they hear "Whatever. Wow! That's amazing!", they also use the default quote: "A classic movie quote!".
//         However, if the quote came directly from the initiator, they won't change it, as they are sure it's a genuine quote.

// Citing the quote

//     When asked to cite the quote, the friend answers as follows: "A told me that B told A that C told B 'quote'.".
//     The chain of friends A, B, C, ... is in the reverse order of how the quote was passed along.
//     The initiator uses "I" where appropriate: "A told me that B told A that I told B 'quote'.".

// Output

//     A string representing what the friend at index cites when asked what they got told by the previous friend.

// Additional Information

//     There will be at least two friends in the input list and at most thirty.
//     The initial quote is always from a movie, but may change depending on the moods of some friends.
//     A movie quote always ends with punctuation.
//     Use names directly in responses, but include "me" and "I" where appropriate.
//     Several friends may share the same name.
//     "Whatever." may be a movie quote, and some movie quotes may end with " amazing!".
//     "A classic movie quote!" is a placeholder used by some friends, but will never appear as initial movie quote.

// Examples (click to expand/collapse)

//P - friends - array of tuples that contains two elements, a string representing the friends name, and a string representing the friends mood (participative, uninsterested, or 'excited')


//P: array of arrays which subarrays include the friends name and friends mood in string form. Will there only be strings? Will there always only be two items in the array? 
//   A string representing a sample quote - will this always be a string? will it ever be an array?
//   index - an integer representing the index of the friend in the friends array who we want to ask what they were told - so there will be an index where we will select from the array of arrays, so friends[index][0] will be the name, and friends[index][1] will be the quote?

//R: A string representing what the friend at index cites when asked what they got told by the previous friend

//E:    friends = [["Bob","participative"],["Ann","participative"]]
//      quote = "There's no place like home."
//      index = 0
//      return "Ann told me that I told Ann 'There's no place like home.'."
//      index = 1
//      return "Bob told me 'There's no place like home.'."
//      friends = [["Bob","participative"],["Ann","participative"],["Blaze","participative"]]
//      quote = "There's no place like home."
//      # Example # 1
//      index = 0
//      return "Blaze told me that Ann told Blaze that I told Ann 'There's no place like home.'."
//      # Example # 2
//      index = 1
//      return "Bob told me 'There's no place like home.'."
//      # Example # 3
//      index = 2
//      return "Ann told me that Bob told Ann 'There's no place like home.'."


//      # Uninterested friend
//      friends = [["Bob","participative"],["Ann","uninterested"]]
//      quote = "There's no place like home."
//      # Example # 1
//      index = 0
//      return "Ann told me that I told Ann 'Whatever.'."
//      # Example # 2
//      index = 1
//      return "Bob told me 'Whatever.'."

function campfire(friends, quote, index) {
    // examine the array at position of index
    // for loop that iterates length of array
    // start at index, if index is > length of the array, start the index at 0 again (we are still only iterating for total amount of times that is equal to the length of the array)
    // if index is 0, you must iterate through entire array backwards, if index > 0, you must iterate forwards up to the index\
    let returnQuote = ''
    if (index > 0){
        let counter = 1
        while (counter > 0){
            quote += friends[index - counter][0]+ ' '
            
            counter ++
        }
    }
  return returnQuote;

}
friends = [["Bob","participative"],["Ann","participative"],["jacob","participative"],["mark","participative"],["luke","participative"],["paul","participative"]]
index = 4
quote = `There's no place like home!`

campfire(friends,quote,index)