const person = {
  firstName : "Squidward",
  lastName : "J Qunicy Tentacles",
  age : 50,
  isEmployed : true,
  sayHello: function() {console.log("Hi im Squidward")},
  eat : () => {console.log("im eating Krabby Patty")},
}

const person2 = {
  firstName : "Saint",
  lastName : "Patrick",
  age : 33,
  isEmployed : false,
  sayHello: () => {console.log("Hi im Prtrick")},
  eat : () => {console.log("im eating algae, hahahah")}
}

person.sayHello();
person2.sayHello();

person.eat();
person2.eat();