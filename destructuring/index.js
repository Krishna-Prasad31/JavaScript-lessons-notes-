/*
const colors = ["red", "green", "blue", "black", "white"];

//[colors[0], colors[4]] = [colors[4], colors[0]];

//console.log(colors);

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
console.log(extraColors)
*/

function display ({firstName, lastName, age, job = "Unemployed"}) {
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Age: ${age} years old`);
  console.log(`job: ${job}`);

}

const person1 = {
  firstName : "Spongebob",
  lastName : "Squarepants",
  age : 33,
  job : "cook",
}

const person2 = {
  firstName : "Patrick",
  lastName : "Star",
  age : 30,
}

display(person1)