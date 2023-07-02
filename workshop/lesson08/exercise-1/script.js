'use strict';

// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
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
  }

  brake() {
    this.speed -= 5;
  }
}

const car1 = new CarCl('Ford', 120);

console.log(car1.speed); // km/h
console.log(car1.speedUS); // mi/h

car1.accelerate(); 
console.log(car1.speedUS); 

car1.brake(); 
console.log(car1.speedUS); 
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)

// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)

// 4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.

// Test data:
// - Data car 1: 'Ford' going at 120 km/h
