scrollDown = () => {
	window.scrollTo(0, document.body.scrollHeight);
};

let close = document
	.getElementById("close")
	.addEventListener("click", closeFunction);

function closeFunction() {
	payment.style.display = "none";
}
let payment = document.getElementById("payment");
let blur1 = document.querySelector(".container");
let blur2 = document.getElementById("form-section");

document.getElementById("form").addEventListener("submit", function (e) {
	e.preventDefault();

	let uniqueID = Date.now();
	console.log(uniqueID);
	//create object to hold data
	let formData = {
		username: document.getElementById("username").value,
		password: document.getElementById("password").value,
		email: document.getElementById("email").value,
		id: uniqueID,
	};

	//retrieve existing data from localstorage
	let storedData = JSON.parse(localStorage.getItem("formData")) || [];

	//add new data to existing data
	storedData.push(formData);

	//store the updated data back in localstorage
	localStorage.setItem("formData", JSON.stringify(storedData));

	//display the payment part
	payment.style.display = "block";

	//reset the form
	document.getElementById("form").reset();

	//blur background
	blur1.style.filter = "blur(5px)";
	blur2.style.filter = "blur(5px)";
});

//If click outside of page close payment screen and unblur
document.getElementById("close").addEventListener("click", function () {
	blur1.style.filter = "blur(0px)";
	blur2.style.filter = "blur(0px)";
});

//On click 'pay now' redirect to page, only if consent chekbox is ticked
document.getElementById("consent").addEventListener("submit", function (e) {
	e.preventDefault(e);

	window.location.href = "payment.html";
});
