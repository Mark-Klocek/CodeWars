//JavaScript class-like objects
class Animal{
  constructor(name, type){
    this.name = name
    this.type = type
  }
  toString = function(){
    return `${this.name} is a ${this.type}`
  }
}
let dog = new Animal('Max', 'dog');
console.log(dog.toString());
console.log(dog.type); 
dog.name; 
dog.name = 'Lassie';