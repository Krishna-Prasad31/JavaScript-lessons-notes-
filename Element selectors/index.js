/*
const myHeading = document.getElementById("my-heading");

myHeading.textContent = "Food";
myHeading.style.backgroundColor = "red";
myHeading.style.textAlign = "center";
myHeading.style.fontFamily = "Arial";

const fruitList = document.getElementsByClassName("fruits");

console.log(fruitList);

for(let fruit of fruitList) {
  console.log(fruit);
  fruit.style.color = "blue";
  fruit.style.fontSize = "20px";
  fruit.style.textAlign = "center";
  fruit.style.backgroundColor = "yellow";
  fruit.style.borderRadius = "10px";
  fruit.style.padding = "10px";

}

Array.from(fruitList).forEach(fruit => 
  fruit.style.fontFamily = "Arial"
)
  */

const h4Elements = document.getElementsByTagName("h4");
const listItems = document.getElementsByTagName("li");
/*
h4Elements[0].style.color = "brown";
h4Elements[0].style.backgroundColor = "yellow";

h4Elements[1].style.backgroundColor = "green";
h4Elements[1].style.color = "white";
*/
/*
for (let h4 of h4Elements) {
  h4.style.color = "brown";
  h4.style.backgroundColor = "yellow";
  h4.style.fontFamily = "Arial";
  h4.style.textAlign = "center";
  h4.style.fontSize = "20px";
  h4.style.borderRadius = "10px";
  h4.style.padding = "10px";
}

for (let listItem of listItems) {
  listItem.style.fontSize = "20px";
  listItem.style.textAlign = "center";
  listItem.style.borderRadius = "10px";
  listItem.style.padding = "10px";
}

Array.from(listItems).forEach(listitems => listitems.style.fontFamily = "Arial");

console.log(h4Elements);
*/
/*
//querySelector only returns the first element that matches the selector
const element = document.querySelector(".fruits");

element.style.backgroundColor = "red";

const vegtable = document.querySelector("ul")

vegetable.style.backgroundColor = "green";
*/

//querySelectorAll returns all elements that match the selector
const elements = document.querySelectorAll(".fruits");
elements.forEach(element => {
  element.style.backgroundColor = "red";
  element.style.color = "white";
  element.style.fontSize = "20px";
  element.style.textAlign = "center";
  element.style.borderRadius = "10px";
  element.style.padding = "10px";
})
