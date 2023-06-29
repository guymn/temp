'use strict';

// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h

// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console

// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console

// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them

// Test data:
// - Data car 1: 'BMW' going at 120 km/h
// - Data car 2: 'Mercedes' going at 95 km/h

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(this.make + ' accelerated to ' + this.speed + ' km/h');
    }
    brake() {
        this.speed -= 5;
        console.log(this.make + ' slowed down to ' + this.speed + ' km/h');
    }
}


var car1 = new Car('BMW', 120);
var car2 = new Car('Mercedes', 95);

car1.accelerate(); 
car1.accelerate(); 
car1.brake(); 

car2.accelerate();
car2.brake(); 
car2.brake(); 
