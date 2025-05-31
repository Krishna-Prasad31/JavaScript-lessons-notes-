class Animals {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move (speed) {
    console.log(`This ${this.name} can move at a speed of ${speed} kmph`)
  }
}

class Rabbit extends Animals {
  constructor(name, age, runspeed) {
    super(name, age); 
    this.runspeed = runspeed;
  }

  run() {
    console.log(`This ${this.name} can run at ${this.runspeed} kmph`);
    super.move(this.runspeed);
  }
}

class Fish extends Animals {
  constructor(name, age, swimspeed) {
    super(name, age);
    this.swimspeed = swimspeed;
  }
  swim() {
    console.log(`This ${this.name} can swim at ${this.swimspeed} kmph`)
    super.move(this.swimspeed);
  }
}

class Hawk extends Animals {
  constructor(name, age, flyspeed) {
    super(name, age);
    this.flyspeed = flyspeed;
  }

  fly() {
    console.log(`This ${this.name} can fly at ${this.flyspeed} kmph`)
    super.move(this.flyspeed);
  }
}

const rabbit = new Rabbit("Moon", 4, 66);
const fish = new Fish("hisna", 89, 158);
const hawk = new Hawk("Garuda", 55, 57);

console.log(rabbit.name)
console.log(fish.age)
console.log(hawk.flyspeed)

rabbit.run();
fish.swim();
hawk.fly();
