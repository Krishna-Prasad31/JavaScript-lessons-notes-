/*function rockstar (guess, Name, cuss) {
  console.log(`why did i move here ${guess}` );
  console.log(`My name is ${Name}` );
  console.log(`You aint nothing but a ${cuss}` );
}

rockstar("weather", "trevor", "punk")
*/

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x-y;
}

console.log(add(2,3))
console.log(subtract(3,4))

function isEven(number) {
  return number % 2 === 0 ? true : false
}

console.log(isEven(18))

function isValidEmail(email) {
return email.includes("@") ? true : false;
}

console.log(isValidEmail("markfuckersburh@gmail"));
console.log(isValidEmail("gorklonrust.com"))