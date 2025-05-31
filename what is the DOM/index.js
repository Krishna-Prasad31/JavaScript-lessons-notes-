console.dir(document)

document.title = "DOM"

const username = "";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? "Guest" : username;