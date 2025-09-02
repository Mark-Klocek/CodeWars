//binary


function practice(arr,hi,low,target){
    let low = 0
    let high = arr.length

    
    do {
        let m = (low + (hi-low)/2);
        let v = arr[m];
        
        if (v === target) return true;
        if (v > target){
            high = m
        }else{
            low = m + 1
        }
    } while (low<hi);

}

(b) =>{{
    const j = Math.floor(Math.sqrt(b.length));
    let i = j;
    for(;i< b.length;i += j){
        if(b[i]){
            break
        }
    }

    i -= j

    for (let k=0; k< jmpAmount && i <b.length;k++, i++){
        if (breaks[i]){
            return i
        }
    }

}}

(arr) => {
    for(let i = 0; i <arr.length ; ++i){
        for(let j = 0; j < arr.length-1-i; ++j){
            if (arr[j]> arr[j+1]){
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
}