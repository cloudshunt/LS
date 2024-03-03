let Animal = {
  init(animalName, sound) {
    this.animalName = animalName;
    this.sound = sound;
    return this;
  },

  makeSound() {
    console.log(`${this.animalName} goes ${this.sound}`);
  },
};

let dog = Object.create(Animal).init('Dog','Woof');

console.log(dog.makeSound());