/*
class MathUtil{
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }

  static getcircumference(radius) {
    return 2 * this.PI * radius;
  }

  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(2))
console.log(MathUtil.getcircumference(7))
console.log(MathUtil.getArea(2));
*/

class User{

  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }

  static getUserCount() {
    console.log(`There are ${User.userCount} users online`)
  }

  sayHello() {
    console.log(`Hello, my username is ${this.username}`)
  }
}

const user1 = new User("patrick");
const user2 = new User("squidward");

user1.sayHello();
user2.sayHello();
User.getUserCount();