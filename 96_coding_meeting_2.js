//7 kyu coding meeting #2 - higher-order function series - greet developers
const peopleList = [
      {
        firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
      },
      {
        firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
      },
      {
        firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
      },
    ];
function greetDevelopers(list) {
  
  for (people of list){
    people.greeting = `Hi ${people.firstName}, what do you like the most about ${people.language}?`
  }
  return list
}

console.log(greetDevelopers(peopleList))