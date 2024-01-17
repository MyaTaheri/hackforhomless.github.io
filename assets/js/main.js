

document.addEventListener("DOMContentLoaded", function() {
	let button = document.querySelector("button");

	button.addEventListener("click", function() {
		let section = document.getElementById("mission");

		if (section) {
			section.scrollIntoView();
		}	
		
	});
});