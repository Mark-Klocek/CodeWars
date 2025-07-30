// I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

// Monday --> 12

// Tuesday --> numbers greater than 95

// Wednesday --> 34

// Thursday --> 0

// Friday --> numbers divisible by 2

// Saturday --> 56

// Sunday --> 666 or -666

// Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)


//P: We are given a string with the day of the week, and we are given a number

//R: We are returning a boolean if the number is one of the numbers the guy is afraid of

//E: if Wednesday is given, and the number is 31, we r eturn false, because one of the rules is on a wednesday, the only number he is a fraid of is 34


var AmIAfraid = function(day, num){
  //Psuedo
  //initialize a boolean to be false
  
  //switch case for each day of the week, to see if the num provided falls within the parameters of being a "scary" number
  //if it falls within the parameter, change bool to true
  //return bool
  let scary = false
  switch(day){
    case 'Monday':
        break;
    case 'Tuesday':
        break;
    case 'Wednesday':
        break;
    case 'Thursday':
        break;
    case 'Friday':
        break;
    case 'Saturday':
        break;
    case 'Sunday':
        break;
  }

}