// alert(
// "THIS IS A PHISHING WEBSITE! Don't enter information you als wouldn't give out to strangers. This is a school project."
// );

// scrollDown = () => {
//   window.scrollTo(0, document.body.scrollHeight);
// };

let fname = document.getElementById("Fname").value;
let lname = document.getElementById("Lname").value;
let email = document.getElementById("email").value;

let close = document
  .getElementById("close")
  .addEventListener("click", closeFunction);

let payment = document.getElementById("payment");

function closeFunction() {
  payment.style.display = "none";
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  payment.style.display = "block";
  let inputs = this.querySelectorAll("input, textarea");
  inputs.forEach(function (input) {
    input.value = "";
  });
});
