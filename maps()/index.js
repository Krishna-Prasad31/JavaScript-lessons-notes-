/*
const numbers = [1, 5, 3, 6, 7 ,8, 9];
const cube = numbers.map(cubes)
const squares = numbers.map(square)

console.log(cube)

function square(element) {
  return Math.pow(element, 2)
}

function cubes(elements) {
  return Math.pow(elements, 3)
}
  */

/*
const students = ["pickachu", "charizard", "cyndaquil", "blastoise", "venasaur"];

const pokemon = students.map(upperCase);

console.log(pokemon)

function upperCase (elements) {
  return elements.toUpperCase();
}
  */

const dateStrings = ["1993-7-14", "2022-11-3", "1845-3-27", "2099-12-1", "1978-6-9"];
const formattedDates = dateStrings.map(formatDates);
console.log(formattedDates)

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
