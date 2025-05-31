class Animals{
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`)
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}
class Rabbit extends Animals{
  name = "rabbit";

  run() {
    console.log(`This ${this.name} is running`);
  }
}

class Fish extends Animals{
  name = "fish";
  
  swim() {
    console.log(`This ${this.name} is swimming`)
  }
}

class Tiger extends Animals{
  name = "Tiger"

  hunt() {
    console.log(`This ${this.name} is hunting`)
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const tiger = new Tiger();

console.log(tiger.alive);
rabbit.eat();
rabbit.sleep();

console.log(tiger.alive);
tiger.eat();
tiger.sleep();

rabbit.run();
fish.swim();
tiger.hunt();