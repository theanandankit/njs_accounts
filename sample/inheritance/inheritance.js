import Animal from "./Animal";
  
class Dog extends Animal {
  constructor(name, sound, breed) {
    super(name, sound);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks loudly!`);
  }
}

// Create a new Animal instance
const myAnimal = new Animal('Cow', 'yak');
myAnimal.speak();

// Create a new Dog instance
const myDog = new Dog('Fido', 'woof', 'Labrador');

// Call methods on the Dog instance
myDog.bark(); // Output: "Fido barks loudly!"
myDog.speak(); // Output: "Fido says woof"
