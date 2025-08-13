// Sam is an avid collector of numbers. Every time he finds a new number he throws it on the top of his number-pile. Help Sam organise his collection so he can take it to the International Number Collectors Conference in Cologne.

// Given an array of numbers, your function should return an array of arrays, where each subarray contains all the duplicates of a particular number. Subarrays should be in the same order as the first occurence of the number they contain:

// group([3, 2, 6, 2, 1, 3])
// >>> [[3, 3], [2, 2], [6], [1]]


//Parameters - we are given an array of numbers only, will the be negative, or only positive integers?


//R We are returning an array of arrays, and each array contains the duplicate version of itself

//E: for example, if we are given an array of [1,2,2,1,3,3,4,4] => [[1,1],[2,2],[3,3],[4,4]]

let arr = [3, 2, 6, 2, 1, 3]
function group(arr) {
    //DO NOT SORT ARRAY
    //P create blank array
    // create duplicate array
    //iterate through given array
    //if current element in array is not in duplicateArray, add it to the duplicate array, and push a new array containing the element onto returnArray
    //if it *is* in the duplicate array, we need to find where the original one is in the returnArray
    // brute force method is to iterate through the return array, and check to see if parent element is equal to returnArray element[0], if it is equal, then you push parent element onto child element
    let returnArray = [] //array we are returning
    let duplicateArray = [] //array we are checking to see if the number has already been added to returnarray


    arr.forEach(element =>{//iterating through given array

        if (!duplicateArray.includes(element)){ //if the current element is not in the duplicate array (essentially that number hasnt occured yet)

            duplicateArray.push(element)//adding current element to duplicate array so if this number occurs again later we will know it has already happened

            returnArray.push([element])//creating a new subarray within the returnArray for this first time occuring number

        }else{  //essentially if the number has already occured

            returnArray.forEach(e=>{    //brute force way def. not optimal but it gets the job done - iterated through the returnArray to see which subarray contains the element

                if(element === e[0]){   //if the first number in the subarray is equal to the element,we know we are at the right subarray

                    e.push(element) //adding current element to the correct subarray
                }
            })
        }
    })

    
    

    return returnArray
}

console.log(group(arr))