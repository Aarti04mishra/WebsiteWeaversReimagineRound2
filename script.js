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




	function animateH1() {
        var h1 = document.querySelector("h1");
        if (!h1) return;

        var h1Text = h1.textContent;
        var characters = h1Text.split("");

        var clutter = "";

        characters.forEach(function (char) {
            clutter += `<span>${char}</span>`;
        });

        h1.innerHTML = clutter;

        var tl = gsap.timeline();
        tl.from("h1 span", {
            y: 50,
            opacity: 0,
            duration: 0.8,
        });

        tl.call(showH3);
    }

    function showH3() {
        var h3 = document.querySelector("h3");
        if (!h3) return;

        h3.style.opacity = 1; 

        var h3Text = h3.textContent.trim(); 
        var words = h3Text.split(" "); 

        var clutter = "";

        words.forEach(function (word, index) {
            if (index > 0) {
                clutter += " "; 
            }
            word.split("").forEach(function (char) {
                clutter += `<span>${char}</span>`;
            });
        });

        h3.innerHTML = clutter;

        var tl = gsap.timeline();
        tl.from("h3 span", {
            y: 20,
            opacity: 0,
            duration: 0.8,
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        var h3 = document.querySelector("h3");
        if (h3) {
            h3.style.opacity = 0; 
        }
        
        animateH1();
    });
