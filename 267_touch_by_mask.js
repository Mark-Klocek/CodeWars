// Given a string and a mask (a list of lengths), split the string into its parts accordingly.
// Examples:

// |     String      |  Mask (lengths)  |          Output           |
// |-----------------|------------------|---------------------------|
// |  "1234567890"   |  (3, 3, 4)       |  ["123", "456", "7890"]   |
// |  "codewars"     |  (4, 4)          |  ["code", "wars"]         |

// Notes:

//     The mask only contains strictly positive integers.
//     A mask is valid if and only if the sum of the lengths is equal to the length of the string.
//     Otherwise, return None, Nothing or a similar empty value.

//P: We are given two variables, one is a string, and the other is an array of integers telling us the length of the word it wants to correlate to

//R: it wants us to return an array of strings that are split based on the "mask" (integer) in the 2nd array of integers

//E: "myexample", (2, 7) =>["my","example"]. If the length of the string does not equal the sum of the mask array, we return None, or Null 
function split(string,mask) {
    //P:
  return [] || null ;
}