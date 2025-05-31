/*let x = 5.64;
let y = 100;
let z = 1;

//z = Math.floor(x);
//z = Math.pow(x, y);
//z= Math.sqrt(y);
//z= Math.log(y)
let max = Math.max(x, y, z);
let min = Math.min(x,y,z);

console.log(min); // 6
*/

const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function() {
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  myLabel1.textContent = randomNum1;
  myLabel2.textContent = randomNum2;
  myLabel3.textContent = randomNum3;
}

