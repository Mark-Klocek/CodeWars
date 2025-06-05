//Doggy Daycare
Dog.prototype.checkDog = function(){
  if (this.vaccinated ===true && this.wormed ===true){
    return `${this.name} can be accepted`
  }
  
  else if (this.vaccinated ===false && this.wormed ===false){
    return `${this.name} can not be accepted`
  }
  else {
    return `${this.name} can only be accepted by itself`
  }
}