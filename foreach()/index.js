/*
let numbers = [1, 2, 4, 6, 4, 5];

numbers.forEach(cube);
numbers.forEach(display);

function double(elements, index, array) {
  array[index] = elements * 2;
}

function cube (element, index, array) {
  array[index] = Math.pow(element, 3)
}

function display(elements) {
console.log(elements)
}
*/

let fruits = ["apple", "banana", "mango", "strawberry", "pineapple"];


fruits.forEach(firstUpperCase)
fruits.forEach(dispay);

function upperCase (element, index, array) {
  array[index] = element.toUpperCase()
}

function lowerCase (element, index, array) {
  array[index] = element.toLowerCase()
}

function firstUpperCase (element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}

function dispay(element) {
  console.log(element)
}

