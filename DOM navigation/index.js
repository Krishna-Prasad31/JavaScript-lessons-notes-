/*
const fruits = document.getElementById("fruits");

const firstChild = fruits.firstElementChild;

firstChild.style.backgroundColor = "red";

const secondChild =  firstChild.nextElementSibling;

secondChild.style.backgroundColor = "blue";

const thirdchild = secondChild.nextElementSibling;

thirdchild.style.backgroundColor = "green";

const vegetables = document.getElementById("vegetables");

const firstChild1 = vegetables.firstElementChild;

firstChild1.style.backgroundColor = "red";

const lastChild = vegetables.lastElementChild;

lastChild.style.backgroundColor = "blue";
*/
/*
const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ul => {
  const firstChild = ul.firstElementChild;
  firstChild.style.backgroundColor = "red";

  const secondChild = firstChild.nextElementSibling;
  secondChild.style.fontFamily = "Arial";

  const thirdChild = secondChild.nextElementSibling;
  thirdChild.style.color = "blue";
}
)
*/
/*
const fruits = document.getElementById("vegetables");

const nextSibling = fruits.nextElementSibling;
nextSibling.style.backgroundColor = "red";
*/
/*
const element = document.getElementById("vegetables");

const previousSibling = element.previousElementSibling;
previousSibling.style.backgroundColor = "red";
*/

/*
const element = document.getElementById("tomato");
const parentElement = element.parentElement;
parentElement.style.backgroundColor = "red";
*/

const element = document.getElementById("fruits");
const childrenElement = element.children;

childrenElement[2].style.backgroundColor = "red";