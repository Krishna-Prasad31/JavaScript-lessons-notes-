/*
const hello = (name, age) => {console.log(`hello ${name}`)
                              console.log(`you are ${age} years old`)}

hello("john doe", 45);
*/

//setTimeout(() => console.log("Hello"), 3000);

const numbers = [1, 4, 3, 5, 6, 2, 7];

const squares = numbers.map((element) => Math.pow(element, 2));
const cube = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((elements) => elements % 2 === 0);
const total = numbers.reduce((accumulator, elements) => accumulator + elements)

console.log(total)