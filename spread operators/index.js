let numbers = [1, 2, 3, 4, 5];

let maxNum = Math.max(...numbers)
let minNum = Math.min(...numbers)

console.log(minNum)

let username = "john doe";
let letters = [...username].join("-");

console.log(letters)

let fruits = ["apple", "banana", "orange", "mango"];
let vegetables = ["cucumber", "potato", "cauliflower", "brinjal"]
let foods = [...fruits,...vegetables, "eggs", "milk"];

console.log(foods)