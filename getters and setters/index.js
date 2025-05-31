/*
class Rectangle{

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
      if (newWidth > 0) {
        this._width = newWidth;
      }
      else{
        console.error("width must be a positive number")
      }
  }

   set height(newHeight) {
      if (newHeight > 0) {
        this._height = newHeight;
      }
      else{
        console.error("height must be a positive number")
      }
  }

  get width() {
  return `${this._width} cm`
  }

  get height() {
    return `${this._height} cm`
  }

  get area() {
    return `${this._width * this._height}cm^2`;
  }
}

const rectangle = new Rectangle(5, 9)

console.log(rectangle.width)
console.log(rectangle.height)
console.log(rectangle.area)
*/

class Person{
  
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName){
    if (typeof newFirstName === 'string' && newFirstName.length > 0 ) {
      this._firstName = newFirstName;
    }
    else{console.error("Enter alphabets")
    }
  }

   set lastName(newLastName){
    if (typeof newLastName === 'string' && newLastName.length > 0 ) {
      this._lastName = newLastName;
    }
    else{console.error("Enter alphabets")
    }
  }

  set age(newAge) {
    if(typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    }
    else{
      console.error("enter a number")
    }


  }
  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get age() {
    return this._age;
  }

}

const person = new Person("john", "doe", 7)

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age)