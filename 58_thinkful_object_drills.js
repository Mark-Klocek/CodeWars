//7 kyu Thinkful - Object Drills: Quarks
class Quark{
  constructor(color,flavor){
    this.color = color
    this.flavor = flavor
    this.baryon_number = 1/3
  }
  interact(obj){
    
    let placeHolder = obj.color
    obj.color = this.color
    this.color = placeHolder
  }
}