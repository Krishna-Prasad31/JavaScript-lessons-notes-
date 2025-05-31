/*
function sayHello() {
  window.alert("Hello, World!");
}
  */
 /*
const timeoutId = setTimeout(() => window.alert("hello World"), 3000); // Calls sayHello after 2 seconds

clearTimeout(timeoutId); // Cancels the timeout
*/

let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => window.alert("hello World"), 3000); // Calls sayHello after 2 seconds
  console.log("Timer started");
}

function clearTimer() {
  clearTimeout(timeoutId); // Cancels the timeout
  console.log("Timer cleared");
}
