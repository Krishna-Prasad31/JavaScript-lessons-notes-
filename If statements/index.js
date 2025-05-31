const myText = document.getElementById("mytext");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function() {
  age = myText.value;
  age = Number(age)
  if (age >= 100) {
    resultElement.textContent = "youre getting too old for this nonsense";
  }
  else if (age == 0) {
    resultElement.textContent = "how long are you gonna keep lying mickey, when is it gonna stop? ";
  }
  else if (age >= 18) {
    resultElement.textContent = "one of your finest orders please";
  }
  else if (age < 0) {
    resultElement.textContent = "lol. Go fuck yourself";
  }
  
  else{
    resultElement.textContent = "You reptilian Motherfucker!";
  }
}


