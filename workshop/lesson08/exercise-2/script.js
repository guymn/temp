'use strict';
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`The ${this.make} is now running at ${this.speed} km/h.`);
  }

  brake() {
    this.speed -= 5;
    console.log(`Brake : The ${this.make} is now running at ${this.speed} km/h.`);
  }
}
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)
class EV extends Car {
  constructor(make, speed, battery) {
    super(make, speed);
    this.battery = battery;
  }
  chargeBattery(chargeTo) {
    this.battery = chargeTo;
  }
  accelerate() {
    this.speed += 20;
    this.battery -= 1;
    console.log(
      `Tesla going at ${this.speed} km/h, with a charge of ${this.battery}%`
    );
  }
}
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'

// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'

// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism 😉

// ### Test data:

// - Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
const tesla = new EV('Tesla', 120, 23);
const car1 = new EV('Tesla', 120, 23);
car1.accelerate();
car1.brake();
car1.chargeBattery(90);