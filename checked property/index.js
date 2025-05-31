const mycheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const rupayBtn = document.getElementById("rupayBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("PaymentResult");

mySubmit.onclick = function () {
  if (mycheckbox.checked) {
    subResult.textContent = `You are subscribed!`
  }
  else {
    subResult.textContent = `You are not subscribed asshole`
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You have selected VISA`;
  }
  else if (mastercardBtn.checked) {
    paymentResult.textContent = `You have selected Mastercard`;
  }
  else if (rupayBtn.checked) {
    paymentResult.textContent = `You have selected RuPay`;
  }
  else{
    paymentResult.textContent = `Brainless Fool`;
  }
}