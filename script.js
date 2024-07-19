const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});



var menu = document.getElementById("menu");

// menu.onclick = function () {
// 	console.log('jk,km');
	
// }







nav = document.querySelector("nav"),

	modeToggle = document.querySelector(".theme"),
	menu = document.querySelector(".menu");
	close = document.querySelector(".openmenu");
	links = document.querySelector(".links");


	

	menu.onclick = function () {
		links.classList.toggle("active");
		menu.classList.toggle("openmenu");
	}