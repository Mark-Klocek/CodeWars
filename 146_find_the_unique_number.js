console.log('146')
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

//     Find the unique number (this kata)
//     Find the unique string
//     Find The Unique

//P: Will there be any negative numbers? will there only ever be int numbers or will there be strings that i have to convert? will there only ever be 1 unique number?

//R: Am I returning a string value of a number, the index of a number, or the actual number that is unique?

//E:
// arr of 1,2,2,5,5,6,6 => 1
// arr of 1,2,3,4,5,4,3,2,1 => 5

function findUniq(arr) {
  //P:
  //Build a frequency map with the array
  //if object.keys does not include element, object.element = 1, otherwise object.element += 1
  //iterate through object - if any of the values are < 2, that is your unique number, and you want to return that key
  const obj = {}
  arr.forEach((element,_)=>{
    //if the object doesn't have the current element as a key
    if (!Object.hasOwn(obj,element)){
      obj[element] = 1
    }
    //if the element is already in the object, add 1 to that element
    else{
      obj[element] += 1
    }
  })
  console.log(obj)
  for (items in obj){
    if (obj[items] < 2){
      return Number(items)
    }
  }
}


// Examples to test findUniq
console.log(JSON.stringify(findUniq([1, 1, 1, 2, 1, 1])) === JSON.stringify(2));
console.log(JSON.stringify(findUniq([0, 0, 0.55, 0, 0])) === JSON.stringify(0.55));
console.log(JSON.stringify(findUniq([3, 10, 3, 3, 3])) === JSON.stringify(10));
console.log(JSON.stringify(findUniq([5, 5, 5, 5, 7])) === JSON.stringify(7));
console.log(JSON.stringify(findUniq([8, 4, 8, 8, 8])) === JSON.stringify(4));
console.log(JSON.stringify(findUniq([6, 6, 9, 6, 6])) === JSON.stringify(9));
console.log(JSON.stringify(findUniq([11, 11, 11, 11, 2])) === JSON.stringify(2));
console.log(JSON.stringify(findUniq([99, 99, 99, 13, 99])) === JSON.stringify(13));
console.log(JSON.stringify(findUniq([4, 4, 4, 4, 1])) === JSON.stringify(1));
console.log(JSON.stringify(findUniq([100, 101, 100, 100, 100])) === JSON.stringify(101));
console.log(JSON.stringify(findUniq([2, 2, 2, 2, 3])) === JSON.stringify(3));
console.log(JSON.stringify(findUniq([88, 88, 77, 88, 88])) === JSON.stringify(77));
console.log(JSON.stringify(findUniq([33, 33, 22, 33, 33])) === JSON.stringify(22));
console.log(JSON.stringify(findUniq([17, 17, 17, 18])) === JSON.stringify(18));
console.log(JSON.stringify(findUniq([71, 72, 71, 71])) === JSON.stringify(72));
console.log(JSON.stringify(findUniq([42, 42, 42, 42, 42, 0])) === JSON.stringify(0));
console.log(JSON.stringify(findUniq([1.1, 1.1, 1.2, 1.1, 1.1])) === JSON.stringify(1.2));
console.log(JSON.stringify(findUniq([13.5, 13.5, 13.5, 14.5])) === JSON.stringify(14.5));
console.log(JSON.stringify(findUniq([7, 7, 7, 7, 6])) === JSON.stringify(6));
console.log(JSON.stringify(findUniq([55, 55, 55, 55, 55, 12])) === JSON.stringify(12));
