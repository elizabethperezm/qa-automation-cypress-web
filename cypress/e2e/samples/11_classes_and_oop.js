// Encapsulation Example
class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    start() {
      console.log(`${this.brand} ${this.model} is starting.`);
    }
  }
  
  const myCar = new Car("Toyota", "Corolla");
  myCar.start(); // Output: Toyota Corolla is starting.
  
  // Inheritance Example
  class ElectricCar extends Car {
    charge() {
      console.log(`${this.brand} ${this.model} is charging.`);
    }
  }
  
  const myEV = new ElectricCar("Tesla", "Model 3");
  myEV.start(); // Output: Tesla Model 3 is starting.
  myEV.charge(); // Output: Tesla Model 3 is charging.
  
  // Polymorphism Example
  const car1 = new Car("Honda", "Civic");
  const car2 = new ElectricCar("Nissan", "Leaf");
  
  car1.start(); // Output: Honda Civic is starting.
  car2.start(); // Output: Nissan Leaf is starting.
  car2.charge(); // Output: Nissan Leaf is charging.
   