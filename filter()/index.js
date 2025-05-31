/*
let numbers = [1, 3, 5, 7, 4, 3, 6, 8, 12];

let oddNums = numbers.filter(isOdd)
let evenNums = numbers.filter(isEven);

console.log(oddNums)

function isEven (element) {
  return element % 2 === 0;
}

function isOdd (element) {
  return element % 2 !== 0;
}
  */

/*
const ages = [5, 12, 17, 8, 16, 14, 11, 19, 22, 15];

const adults = ages.filter(isAdult);
const minors = ages.filter(isMinor)

console.log(minors)

function isAdult(element) {
  return element >= 18;
}

function isMinor (element) {
  return element <= 18;
}
  */

const fruits = ["apple", "banana", "mango", "grape", "kiwi", "orange",
                 "pineapple", "strawberry", "peach", "watermelon"];

const longWords = fruits.filter(getLongwords);
const shortWords = fruits.filter(getShortwords);

console.log(longWords)

function getShortwords (elements) {
  return elements.length <= 6;
}

function getLongwords (elements) {
  return elements.length >= 6;
}