// Given a string s and a character c, return an array of integers representing the shortest distance from the current character in s to c.
// Notes

//     All letters will be lowercase.
//     If the string is empty, return an empty array.
//     If the character is not present, return an empty array.

// Examples

const s = "lovecodewars"
const c = "e"
// result = [3, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 4]

// s = "aaaabbbb"
// c = "b"
// result = [4, 3, 2, 1, 0, 0, 0, 0]

// s = ""
// c = "b"
// result = []

// s = "abcde"
// c = ""
// result = []

//Params: we are given a string and character, wil the string always have at least 1 length? What do you want us to return if there is an empty string?

//Return: We are returning an array of integers that corresponds the shortest distance between where that element in the original array and the given element param

//Example: string ="world", c = "r" => [2,1,0,1,2]


function shortesttoChar(s, c) {
    //Psuedo
    //First thing we need to do is make sure that the string is at least 1 character long
    //Then we need to create an array of indexes where the element occurs in the string
    //after we create the element of indexes, we iterate over the string
    //for each element in the iteration, we then iterate over the index of that element and the array of elements we created earlier.
    //we push the absolute value of the smallest amount of the difference between the current elements index and every element of the index array
    
    //if the string is empty, or if the element does not exist in the string - return empty array
    if(s.indexOf(c) === -1 || s.length < 1 || c===''){
        return []
    }

    
    //initializing the index array to keep track of what index the element is at
    let indexArray = new Array
    s = s.split('')
    strLength = s.length
    //creating an array of indexes where the element exists
    s.forEach((element,index)=>{
        element == c ? indexArray.push(index) : ''
    })

    //returning the array of distances
    return s.map((_,index)=>{
        //setting the minvalue to the length of the array, because we know the distance will never be the entire length
        let minValue = s.length
        //iterating through the indexArray (where all of the element indices are held)
        indexArray.forEach((element) =>{
            //setting currentDistance of the current index of the parent array compared to the current index of the indicies array. The indicies array are where all of the selected elements are. so the array would be something like 3-4, that means the place where the selected elements are at place 3 and 4. so we want to subtract the current position of the parent array (say letter M in Moment which would be 0) from EACH position of where the element is in the array. so you would do 0-3, then 0-4, and see which absolute v alue is smaller. That gives us the distance between the current element and the closest occurance of each selected element.
            currentDistance = Math.abs(index-element)
            //you compare the distance from the current element to whichever index of the selected element you are at, and if the absolute value is smaller than the current minimum value, it replaces the minimum value with that new abs value. giving us the shortest distance.
            if(currentDistance < minValue){
                minValue = currentDistance
            }
        })
        //we return the minvalue in the map, creating an array of shortest distance between each element and the closest occurance of the selected element
        return minValue
    })

    
}

console.log(shortesttoChar("lovecodewars", "e"))