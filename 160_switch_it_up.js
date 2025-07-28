// When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

// Input: 1

// Output: "One".

// If your language supports it, try using a switch statement.
function switchItUp(number){
//Write your own Code!
    let num = null
    switch(number){
        case 0:
            num = 'Zero'
            break;
        case 1:
            num = 'One'
            break;
        case 2:
            num = 'Two'
            break;
        case 3:
            num = 'Three'
            break;
        case 4:
            num = 'Four'
            break;
        case 5:
            num = 'Five'
            break;
        case 6:
            num = 'Six'
            break;
        case 7:
            num = 'Seven'
            break;
        case 8:
            num = 'Eight'
            break;
        case 9:
            num = 'Nine'
            break;
        
        default:
            num = 'ERROR'
            break;
    }
    return num
}