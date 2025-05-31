const newH1 = document.createElement("h1");
newH1.textContent = "Hello my dear friend";
newH1.id = "my-H1";
newH1.style.fontFamily = "monospace";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

document.getElementById("box1").append(newH1);
/*
const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);
*/
/*
const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[3]);
*/
/*
document.getElementById("box1").removeChild(newH1);
*/