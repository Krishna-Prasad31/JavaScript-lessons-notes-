/*
const hello = function() {
  console.log("hello")
}

setTimeout(hello, 5000);
*/

const numbers = [1, 2, 4, 6 ,6, 4, 5];

const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});

const cubes = numbers.map(function (element) {
  return Math.pow(element, 3)
});

const evenNUms = numbers.filter(function isEven (element) {
  return element % 2 ===0;
});

const total = numbers.reduce(function (accumulator, element) {
  return accumulator + element;
})

console.log(total)


