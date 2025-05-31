let buttons = document.querySelectorAll(".myButtons");
/*
buttons.forEach(button => {
  button.style.backgroundColor = "green";
  button.textContent += "🤡";
})
  */
/*
buttons.forEach(button => {
  button.addEventListener("click", event => {
    event.target.style.backgroundColor = "green";
  })

    button.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "lightblue";
  })

  button.addEventListener("mouseout", event => {
     event.target.style.backgroundColor = "blue";
  })
})

const newButton = document.createElement("button");
newButton.textContent = "Button5";
newButton.classList = "myButtons";
document.body.appendChild(newButton)

buttons = document.querySelectorAll(".myButtons");

console.log(buttons);
*/

buttons.forEach(button => {
  button.addEventListener("click", event => {
    event.target.remove()
    console.log(buttons)
    buttons = document.querySelectorAll(".myButtons");
  })
})