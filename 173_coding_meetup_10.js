// Given the following input array:

// var list1 = [
//   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
// ];

// write a function that adds the username property to each object in the input array:

// [
//   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
//     username: 'emilyn1990' },
//   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
//     username: 'nore2000' }
// ]

// The value of the username property is composed by concatenating:

//     firstName in lower-case;
//     first letter of the lastName in lower-case; and
//     the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.

// Notes:

//     The input array will always be valid and formatted as in the example above.
//     Age is represented by a number which can be any positive integer.
//     Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
//     Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.

//P: we are given an array of objects. it will always be valid formated in the way above.

//R: We are returning the array of objects with each object having the username property appended to it

//E:    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' } => { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',username: 'emilyn1990' },
function addUsername(list) {
  //Psuedo:
  // we want to iterate through each object in the array
  // for each element, we want to assign a variable to the first name lower cased
  //then we want to concatenate the first letter of the last name onto that variable
  //then we want to contatenate 2020 - age to the end of that variable
  //we then want to, using dot notation, add the property username with the value of that variable to each element

list.forEach(element=>{
  let userName = element.firstName.toLowerCase()
  userName += element.lastName.split('')[0].toLowerCase()
  userName += String(2020 - element.age)
  element.username = userName
})

return list

}

