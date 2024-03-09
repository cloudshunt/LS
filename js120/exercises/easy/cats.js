class Pet {
  constructor(name, age, description) {
    this.name = name;
    this.age = age;
    this.description = description;
  }
}

class Cat extends Pet {
  // constructor(name, age, description) {
  //   super(name, age);
  //   this.description = description;
  // }

  info() {
    return `${this.name} is ${this.age} and has ${this.description} fur`;
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());

/*
This works because Cat class will tr
 */