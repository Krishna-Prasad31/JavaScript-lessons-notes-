/*
const prices = [13, 5, 4, 23, 8, 15, 1, 10, 5, 18];

const total = prices.reduce(sum);

console.log(total)

function sum(accumulator, element) {
  return accumulator + element;
}
  */

const grades = [95, 88, 76, 92, 85, 67, 59, 73, 90, 81];

const minimum = grades.reduce(getMin)
const maximum = grades.reduce(getMax);

console.log(minimum)

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
  return Math.min(accumulator, element);
}