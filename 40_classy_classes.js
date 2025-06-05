//Classy Classes
class Person1 {
  constructor(name,age) {
    this.name = name
    this.age = age
    this.info = `${name}s age is ${age}`
  }
  
  
}
let john = new Person1('john', 34)
console.log(john.info)
