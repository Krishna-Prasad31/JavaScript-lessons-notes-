/*
let fruits = ["coconut", "apple", "oranges", "pineapple"]

fruits.sort();

console.log(fruits)
*/

/*
let number = [1, 5 ,6 ,3, 32, 5, 4 ,6, 7,4,3,2, 2 ,];

number.sort((a, b) => a - b);

console.log(number)
*/

const people = [{name: "Spongebob", age: 33, gpa: 9.0},
                {name: "Patrick", age: 34, gpa: 3.0},
                {name: "Squidward", age: 56, gpa: 8.0}, 
                {name: "Crusty Crab", age: 67, gpa: 6.0}]

people.sort((a,b) => a.name.localeCompare(b.name));

console.log(people)