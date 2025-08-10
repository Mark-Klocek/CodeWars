// A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

// E.g.

// var abc1 = "abcdefghijklmnopqrstuvwxyz";
// var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
   
// var sub = new SubstitutionCipher(abc1, abc2);
// sub.encode("abc") // => "eta"
// sub.encode("xyz") // => "qxz"
// sub.encode("aeiou") // => "eirfg"
   
// sub.decode("eta") // => "abc"
// sub.decode("qxz") // => "xyz"
// sub.decode("eirfg") // => "aeiou"

//Params We are given two strings, where each character in a string has an opposite version of itself in the other string. If it doesn't exist, leave it be. Will there only be one instance of each letter? I.e. will it ever be something like "aeioua" in abc1, or abc2

//R: we are returning the str with it's "encoded" (opposite) counterparts

//E: 
var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
// sub.encode('adg') => 'eis'


function SubstitutionCipher(abc1, abc2) {
    //Psuedo
    //split input str to new array
    //iterate through each character in that array, see if encode, see if it exists in abc1
    //if it is decode, see if it exists in abc2
    //if it does exist in abc1/abc2, take the indexOf then map that onto the opposite array
    //if it does not exist, keep the original letter
    //append that letter onto returnString
    //return returnString
  this.encode = function (str) {
    
  }
  this.decode = function (str) {
  }
}
var sub = new SubstitutionCipher(abc1, abc2);

console.log(sub.encode('abc'))