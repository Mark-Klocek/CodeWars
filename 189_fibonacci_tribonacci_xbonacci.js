console.log('189')

// If you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.

// Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.

// Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.

// xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
// xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
// xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
// xbonacci {1,1} produces the Fibonacci sequence

//P We are given an array, and a number at which we want the final array's length to be

//R: we are to return an array of n length

//E: if we are given something like [1,1,1,1], 10 => [1,1,1,1,4,7,13,25,49,94]
let arr = [19, 14, 13, 6, 11, 14, 12, 3, 8, 7, 19, 6, 10, 19, 2, 0]
let n = 6
function Xbonacci(signature,n){
  //Psuedo
  //so we want to iterate in a loop n - arr.length times
  //we want to slice the array starting at i, and ending at the end of the array
  //reduce the sliced portion of the array, and push that back onto the original orray
  //the loop should run, for example, 6 times if the number passed is 10 and the array is [1,1,1,1]
    let timesToIterate = n - signature.length
    let returnArray = signature
    if (signature.length > n){
        return signature.slice(0, n)
    }
    for(let i = 0;i<timesToIterate;i++){
        tempArray = returnArray.slice(i)
        
        valueToAdd = tempArray.reduce((acc,c)=>acc+=c,0)
        returnArray.push(valueToAdd)
    }
    return returnArray
}

console.log(Xbonacci(arr,n))

[ 19, 14, 13, 6, 11, 14 ]