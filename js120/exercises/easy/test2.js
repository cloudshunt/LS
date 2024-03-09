// class Pet {
//   constructor(name, age, description) {
//     this.name = name;
//     this.age = age;
//     this.description = description;
//   }
// }
function Pet(name, age, description) {
  this.name = name;
  this.age = age;
  this.description = description;
}

function Cat(name, age, description) {
  Pet.call(this, name, age, description);
}

Cat.prototype = Object.create(Pet.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.info = function() {
  return `${this.name} is ${this.age} and has ${this.description} fur`;
};

// class Cat extends Pet {
//   info() {
//     return `${this.name} is ${this.age} and has ${this.description} fur`;
//   }
// }

let pudding = new Cat('Pudding', 7, 'black and white');
console.log(Cat.prototype.constructor);
// console.log(pudding.constructor);
// console.log(pudding.info());
