// class Animal {
//   constructor(name, species) {
//     this.name = name;
//     this.species = species;
//   }

//   getDetails() {
//     return `Name: ${this.name}, Species: ${this.species}`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name, "Dog");
//     this.breed = breed;
//   }
//   getDetails() {
//     return `${super.getDetails()}, Breed: ${this.breed}`;
//   }
// }

// const myDog = new Dog("Max", "Labrador");
// console.log(myDog.getDetails()); // Output: "Name: Max, Species: Dog, Breed: Labrador"


import React from 'react'
import Practice from './Practice'

const App = () => {
  return (
    <div>
      <Practice/>
    </div>
  )
}

export default App
