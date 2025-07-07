// ask



// Given a length, an offset, and a list, slide a window of that length, moving by that offset every step, over the list, returning a list of lists.

// The windows may overlap each other, or skip certain elements. All windows should be of the given length; if insufficient elements remain after a certain offset, end the list of lists. It is possible to take 0 elements from an empty list, so take care to handle window(0,offset,list) correctly.

// The length will always be non-negative; the offset will always be strictly positive.
// Examples

// for 2, 1, [0,1,2,3,4] return [ [0,1], [1,2], [2,3], [3,4] ]
// for 2, 2, [0,1,2,3,4] return [ [0,1], [2,3] ]
// for 2, 3, [0,1,2,3,4] return [ [0,1], [3,4] ]


//P: We will be given an length of list, the off set within the parent array, and the parent array? Will offset always be greater than 0?

//R: We're returning a list of lists that are length long

//E: 
let length = 3, offset = 1, list = [10, 20, 30, 40, 50];
// let length = 2, offset = 1, list = [1, 2, 3, 4];
// let length = 4, offset = 2, list = [5, 6, 7, 8, 9, 10];
// let length = 1, offset = 3, list = [100, 200, 300, 400, 500];
// let length = 5, offset = 2, list = [9, 8, 7, 6, 5];
// let length = 3, offset = 1, list = [11, 12, 13, 14];
// let length = 2, offset = 4, list = [0, 1, 2, 3, 4, 5];
// let length = 6, offset = 3, list = [2, 4, 6, 8, 10, 12];
// let length = 3, offset = 2, list = [15, 30, 45, 60, 75];
// let length = 1, offset = 5, list = [1, 3, 5, 7, 9, 11];


function window1(length,offset,list) {
  //P:
  //iterate through the array
  //slice starting at 0 and ending at i + length
  //iterate i at offset
  //push array slice onto return array
  //return array
  console.log(list)
  let returnArray = []
  for (i = 0;i <= list.length; i+= offset){
    tempArray = list.slice(i,length+i)
    if (tempArray.length == length){
      returnArray.push(tempArray)
    }
  }

  return returnArray;
}

console.log(window1(length,offset,list))