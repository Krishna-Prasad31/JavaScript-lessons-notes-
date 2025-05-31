const newListItem = document.createElement("li");

newListItem.textContent = "Mango";
newListItem.id = "mango";
newListItem.style.fontWeight = "bold";
newListItem.style.fontSize = "2rem";
newListItem.style.backgroundColor = "lightgreen";

document.body.prepend(newListItem);

document.getElementById("fruits").appendChild(newListItem);

document.getElementById("banana").before(newListItem);