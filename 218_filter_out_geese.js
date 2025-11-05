//P - we are given an array of strings, each string will be a word. Will there only ever be strings in this array? Does it matter if theres a number and we return the number in the string? 

//R We return an array of strings filtering out words that exist in the geese array

//E: gooseFilter(['blah','weep','red','African']) => ['blah','weep','red']







function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  //P
  //return filtered version of birds
  //each filter iteration checks to see if current element exists in birds
  //if it doesnt exist, it passes through the filter
  //returns the filtered birds not containing the goose species

  return birds.filter((element)=> !geese.includes(element))
};