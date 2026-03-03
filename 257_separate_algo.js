// Scenario

// Now that the competition gets tough it will Sort out the men from the boys .

// Men are the Even numbers and Boys are the odd !alt !alt
// Task

// Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys !alt !alt
// Notes

//     Return an array/list where Even numbers come first then odds

//     Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

//     Array/list size is at least 4 .

//     Array/list numbers could be a mixture of positives , negatives .

//     Have no fear , It is guaranteed that no Zeroes will exists . !alt

//     Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

function menFromBoys(arr){
    let men = []
    let boys = []
    arr.forEach((element)=>{
        element % 2 == 0 ? men.push(element) : boys.push(element)
    })
    men = men.sort((a,b)=> a-b)
    
    boys = boys.sort((a,b) => b-a)
    men.push(...boys)
    let returnSet = new Set(men)
    let realReturnSet = [...returnSet]
    
  return realReturnSet
}

console.log(menFromBoys([49,818,-282,900,928,281,-282,-1]))