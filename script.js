// hamburger menu
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
	nav.classList.toggle("slide");
});

const navLinks = document.querySelectorAll(".menu__link");
const navSlide = document.getElementsByClassName("nav ul slide");
const checkbox = document.getElementById("checkbox");
console.log(navLinks);
for (let i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener("click", function () {
		if (nav.classList.contains("slide")) {
			nav.classList.remove("slide");
			checkbox.checked = false;
		}
	});
}

// price guide accordion
const acc_btns = document.querySelectorAll(".accordion-header");
const acc_contents = document.querySelectorAll(".accordion-body");
acc_btns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		acc_contents.forEach((acc) => {
			if (e.target.nextElementSibling !== acc && acc.classList.contains("active")) {
				acc.classList.remove("active");
				acc_btns.forEach((btn) => btn.classList.remove("active"));
			}
		});

		const panel = btn.nextElementSibling;
		panel.classList.toggle("active");
		btn.classList.toggle("active");
	});
});

// gallery
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
