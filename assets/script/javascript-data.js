document.addEventListener("DOMContentLoaded", function () {
	let dataGrid = document.getElementById("data-grid");
	let storedData = JSON.parse(localStorage.getItem("formData")) || [];

	storedData.forEach((data) => {
		let usernameDiv = document.createElement("div");
		usernameDiv.className = "grid-item";
		usernameDiv.textContent = data.username;

		let passwordDiv = document.createElement("div");
		passwordDiv.className = "grid-item";
		passwordDiv.textContent = data.password;

		let emailDiv = document.createElement("div");
		emailDiv.className = "grid-item";
		emailDiv.textContent = data.email;

		const ibanDiv = document.createElement("div");
		ibanDiv.className = "grid-item";
		ibanDiv.textContent = data.iban || ""; // Display empty if IBAN is not available

		dataGrid.appendChild(usernameDiv);
		dataGrid.appendChild(passwordDiv);
		dataGrid.appendChild(emailDiv);
		dataGrid.appendChild(ibanDiv);
	});
});

// Function to clear data
function clearData() {
	if (
		confirm(
			"Are you sure you want to clear the data? \nYou won't be able to retrieve it once it's gone!"
		) == true
	) {
		text = localStorage.removeItem("formData");
		window.location.reload();
	} else {
		null;
	}
}
document.getElementById("clearDataButton").addEventListener("click", clearData);

document.getElementById("refresh-page").addEventListener("click", function () {
	window.location.reload();
});

// Set the refresh interval in seconds
// Change this to the desired interval
const refreshInterval = 5;

// Function to refresh the page
function refreshPage() {
	window.location.reload();
}

// Set the interval to call the refreshPage function every x seconds
setInterval(refreshPage, refreshInterval * 1000); // Convert seconds to milliseconds
