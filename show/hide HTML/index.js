const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event => {

  if(myImg.style.visibility === "hidden"){ 
    myImg.style.visibility = "visible";
    event.target.textContent = "Hide";
    return;
  }
  else{
    event.target.textContent = "Show";
  myImg.style.visibility = "hidden"; 
  }
})

//you can even use display instead of visibility , but it depends on your scenario and your need,