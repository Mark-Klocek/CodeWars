// You're a programmer in a SEO company. The SEO specialist of your company gets the list of all project keywords everyday, then he looks for the longest keys to analyze them.

// You will get the list with keywords and must write a simple function that returns the biggest search keywords and sorts them in lexicographical order.

// For instance you might get:

// 'key1', 'key2', 'key3', 'key n', 'bigkey2', 'bigkey1'

// And your function should return:

// "'bigkey1', 'bigkey2'"


//P: we are given a function that has several arguments pased into it

//R: we are returning the longest argument, and if there are multiple with the same length, they want the array returned alphabeticaly

//E: ['one','two','three','seven'] => ['seven','three']

function theBiggestSearchKeys(...args) {
    
  //P:instantiate an empty array

  //sort given arguments based on length descending

  //starting left side, push that item into the empty array because we know it's the longest.

  //if the empty array is only length 1, return 0 position of new array

  //if empty array length > 1, return that array sorted
  longestKey = 0
  if (args.length === 0){
    return '\'\''
  }
  returnArray = []
    args = args.sort((a,b)=> b.length - a.length)
    for (let i = 0;i<args.length;i++){
        if (i === 0){
            longestKey = args[i].length
            returnArray.push(`\'${args[i]}\'`)
        }else{
            if (args[i].length === longestKey){
                returnArray.push(`\'${args[i]}\'`)
            }else{
                break
            }
        }
    }
    return returnArray.length > 1 ? returnArray.sort().join(', '):returnArray[0]
}
console.log(theBiggestSearchKeys("key1", "key22", "key333"),)