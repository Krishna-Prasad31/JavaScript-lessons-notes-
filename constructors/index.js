function Car(make, model, year, color) {
  this.make = make,
  this.model = model,
  this.year = year,
  this.color = color,
  this.drive = function() {console.log(`You can drive the ${this.make} ${this.model}`)}
}

const car1 = new Car("Hyundai", "Eon", 2017, "Royal Red");
const car2 = new Car("Toyota", "Innova", 2020, "white");
const car3 = new Car("Bugatti", "Chiron", 2014, "black")

car1.drive();
car2.drive();
car3.drive();