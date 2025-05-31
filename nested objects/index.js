
/*const person = {
  fullName: "Spongebob Squarepants",
  age: 30,
  isStudent: true,
  hobbies: ["watching TV", "Taking Gary on a stroll", "cooking"],
  address: {
    street: "Mariana Trench",
    city: "Bikini bottom",
    country: "The Pacific Ocean"
  }
}

console.log(person.fullName)
console.log(person.age)
console.log(person.isStudent)
console.log(person.hobbies)
console.log(person.address.street + person.address.city + person.address.country)
*/

class Person{

  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address{

  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("Spongebob Squarepants", 33,
                           "124 Conch St.", "Bikini Bottom", 
                           "The Pacific");

const person2 = new Person("Patrick Star", 46,
                           "128 Conch St.", "Bikini Bottom", 
                           "The Pacific"); 

const person3 = new Person("Squidward J Quincy", 59,
                           "122 Conch St.", "Bikini Bottom", 
                           "The Pacific"); 

console.log(person3.name)