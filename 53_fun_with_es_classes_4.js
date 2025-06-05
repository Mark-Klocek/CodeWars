//Fun with ES6 Classes #4 - Cubes and Setters
class Cube2 {
  constructor(length){
    this.length = length
    
  }
  set volume(n){
    this._volume = n
    this.length = Math.cbrt(n)
  }
  get volume(){
    return this.length **3
  }

  set surfaceArea(n){
    this._surfaceArea = n
    this.length = Math.sqrt(n / 6)
  }
  get surfaceArea(){
    return 6 * (this.length **2)
  }
}
let cube = new Cube2(1);
cube.length = 2;

cube.volume = 125
console.log(cube.surfaceArea)