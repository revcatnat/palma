const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
	nav.classList.toggle("slide");
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous ctrl
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image ctrl
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

// Navigation
document.querySelector(".menu-list").addEventListener("click", function (e) {
	e.preventDefault();
	console.log(e.target);
	console.log(e.currentTarget);

	if (e.target.classList.contains("menu__link")) {
		const id = e.target.getAttribute("href");
		document.querySelector(id).scrollIntoView({ behavior: "smooth" });
	}
});

// Email address validation
function ValidateEmail(inputText) {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (inputText.value.match(mailformat)) {
		return true;
	} else {
		alert("Please enter a valid email address!");
		document.palmaForm.email.focus();
		document.palmaForm.email.style.border = "red";
		return false;
	}
}

// Clean form fields after submission
const form = document.getElementsByName("palmaForm");
form.addEventListener("submit", function handleSubmit() {
	form.reset();
});
