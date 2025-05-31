const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");


myButton.addEventListener("click", (event) => {
  myBox.style.backgroundColor = "red";
  myBox.textContent = "Ouch! 🤕";
});

myButton.addEventListener("mouseover", event => {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = "Click me not! 😨";
})

myButton.addEventListener("mouseout", event => {
  myBox.style.backgroundColor = "lightgreen";
  myBox.textContent = "Click me! 😁";
})