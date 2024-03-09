class Pet {
  constructor(name, age, description) {
    this.name = name;
    this.age = age;
    this.description = description;
  }
}

class Cat extends Pet {
  info() {
    return `${this.name} is ${this.age} and has ${this.description} fur`;
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
console.log(pudding.constructor);
// what new does
// 1. create new object obj
// 2. set obj's [[prototype]] as constructorName.prototype
// 3. constructor's execution context set as obj
// 4. invoke the constructor
// 
// 5. return obj 

console.log(pudding.info());
// console.log(butterscotch.info());

/*
This works because Cat class will tr
 */