let userName = window.prompt("Enter your username");


userName = userName.trim().charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

console.log(userName);