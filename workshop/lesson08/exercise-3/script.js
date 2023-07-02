'use strict';

// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class

// 2. Make the 'charge' property private

// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!

// ### Test data:

// - Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(newSpeed) {
    this.speed = newSpeed * 1.6;
  }
  accelerate() {
    this.speed += 10;
    return this;
  }
  brake() {
    this.speed -= 5;
    return this;
  }
}
class EVCl extends CarCl {
    #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
    return this;
  }
}

const car1 = new EVCl('Rivian', 120, 23);
car1.accelerate().brake().chargeBattery(90);