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


let returnArray = new Array

///linked list




class Node{
    constructor(Value){
        this.value = Value
        this.next = null
    }
}


//Queue
class LinkedList{
    constructor(){
        this.head = this.tail = undefined
        this.length = 0
    }
    enqueue(item){
        this.length++;
        if(!this.tail){
            this.tail = this.head = Node(item)
        }        
        const tail = this.tail
        this.tail = item
        this.tail.next = tail

    }
    deque(){
        if (!this.head){
            return undefined
        }

        this.length--;
        const head = this.head
        this.head = this.head.next
        return head.value
    }
    peek(){
        return this.head?.value
    }
}
