/*
let username = "";

while (username === "" || username === null) {
  username = window.prompt("Enter your username");
}
console.log(`Hello ${username}`);
*/

let loggedIn = false;
let username;
let password;

do{
  username = window.prompt("Enter your username");
  password = window.prompt("Enter your password");

  if (username === "johndoe" && password === "6767") {
    loggedIn = true;
    console.log(`welcome ${username}`);
  }else{
    console.log("invalid credentials")
  }
}while (!loggedIn)