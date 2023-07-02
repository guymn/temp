'use strict';
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`The ${this.make} is now running at ${this.speed} km/h.`);
};

function EV(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `The ${this.make} is now running at ${this.speed} km/h, with a charge of ${this.charge}%.`
  );
};

// ### Test data:

// - Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
const car1 = new EV('Tesla', 120, 23);
car1.accelerate();
car1.brake();
car1.chargeBattery(90);
