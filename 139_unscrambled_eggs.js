// Unscramble the eggs.

// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.
// Example

// unscrambleEggs("Beggegeggineggneggeregg")  =>  "Beginner"
// //             "B---eg---in---n---er---"

// Kata is supposed to be for beginners to practice reggular eggspressions, so commenting would be appreciated.

//P:Some string will be given to us. Will it be in the form of an array? Will it ever be a number that has to be changed into a string?

//R:Returning said string without the word "egg" in it.

//E: 

// let string = "Speggetegghetti"       // => Spaghetti
// let string = "Reggunneregg"          // => Runner
// let string = "Deggressegg"           // => Dress
// let string = "Eggxpleggaineregg"     // => Explainer
// let string = "Heggammeregg"          // => Hammer
// let string = "Preggacteeggicegg"     // => Practice
// let string = "Eggducatteggion"       // => Education
// let string = "Eggtereggnet"          // => Internet
// let string = "Leggbrarieggan"        // => Librarian
// let string = "Eggniveggstigeggator"  // => Investigator
// let string = "Egglecteggroniceggs"   // => Electronics
// let string = "Eggxeggclusieggegg"    // => Exclusive
// let string = "Eggrassegghoppegging"  // => Grasshopping

const unscrambleEggs = (string) => string.replaceAll('egg','')

console.log(unscrambleEggs(string))