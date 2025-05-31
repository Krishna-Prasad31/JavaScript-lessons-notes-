 /*
 try{
  console.log(x);
 }

 catch(error){
  console.log(error)
 }
 
 finally {
  console.log("finally")
  // This block will always execute
  // regardless of whether an error occurred or not
  console.log("This block will always execute");
  // You can also use this block to clean up resources or perform any final actions
  // For example, you might want to close a database connection or release a lock
  // that was acquired in the try block.
 }

console.log("hello world")
*/

try{
const dividend = window.prompt("Enter the dividend");
const divisor = window.prompt("Enter the divisor");

if (divisor === 0) {
  throw new Error("Division by zero is not allowed");
}

if (isNaN(dividend) || isNaN(divisor)) {
  throw new Error("Invalid input: Please enter valid numbers");
}

const result = dividend / divisor;
console.log(result);
}

catch(error){
  console.log(error)
  // You can also log the error to a server or perform other error handling actions
  // For example, you might want to send an email notification to the development team
  // or log the error to a monitoring service.
  // console.log("An error occurred: " + error.message);
  // console.log("Error stack trace: " + error1
}

console.log("You are at the end")
