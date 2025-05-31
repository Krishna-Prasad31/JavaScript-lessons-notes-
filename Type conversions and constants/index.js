const PI = 3.14159265358979323846;
let radius;
let circumference;


document.getElementById("mySubmit").onclick = function() {
 radius = document.getElementById("myText").value;
 radius = Number(radius);
 circumference = 2 * PI * radius; 
 document.getElementById("myH3").textContent = circumference;
}
console.log(circumference)