// You are given two strings (st1, st2) as inputs. Your task is to return a string containing the numbers in st2 which are not in str1. Make sure the numbers are returned in ascending order. All inputs will be a string of numbers.
console.log('test')
// Here are some examples:

// findAdded('4455446', '447555446666'); // '56667'
// findAdded('44554466', '447554466'); // '7'
// findAdded('9876521', '9876543211'); // '134'
// findAdded('678', '876'); // ''
// findAdded('678', '6'); // ''

//P We are given two strings of numbers

//R: we ar returning st2 numbers which aren't in str1

//E: str1 = '4455446' str2 = '447555446666' => '56667'

let str1 = '4455446'
let str2 = '447555446666'
function findAdded(st1, st2){
    //Psued
    // break strings into arrays
    //iterate through st2
    //if element in st2 exists in st1, remove element from both st2 and st1
    //we do this by splicing st2, and replacing indexof element in st1 with an empty space
    //we then join the st2 to get rid of empty spaces
    //split st2 again so we can sort it in ascending order
    //conver each string number into a number
    //sort the array
    //rejoin the array, and return the joined version of the array

    st1 = st1.split('')
    st2 = st2.split('')
    st2.forEach((element,index)=>{
        if (st1.includes(element)){
            st2.splice(index,1,'')
            st1.splice(st1.indexOf(element),1,'')
            
        }
    })
    st2 = st2.join('')
    st2 = st2.split('')
    return st2.sort((a,b)=>+a-+b).join('')
}


console.log(findAdded(str1,str2))