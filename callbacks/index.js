/*
hello(wait);

function hello(callback) {
  console.log("Hello!");
  callback();
}

function wait () {
  console.log("wait")
}

function leave() {
  console.log("Leave!")
}

function goodbye() {
  console.log("Good Bye!")
}
*/

sum(displayPage, 6, 7)

function sum (callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementById("myH1").textContent = result
}