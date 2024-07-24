/* function makeLine(id, squiggleCount) {
	var curve;
	var lineEl = $(id);

	for (var i = 0; i < squiggleCount; i++) {
		curve = document.createElement("div");
		curve.className = "curve-1";
		lineEl.append(curve);

		curve = document.createElement("div");
		curve.className = "curve-2";
		lineEl.append(curve);
	}
} */
// Найти кнопку для прокрутки вверх
let mybutton = document.getElementById("scroll-btn");

// Когда пользователь прокручивает вниз 20px от верхней части документа, показать кнопку
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// Когда пользователь нажимает на кнопку, прокрутите документ вверх
function topFunction() {
	// Плавная прокрутка
	const scrollToTop = () => {
		const c = document.documentElement.scrollTop || document.body.scrollTop;
		if (c > 0) {
			window.requestAnimationFrame(scrollToTop);
			window.scrollTo(0, c - c / 8);
		}
	};
	scrollToTop();
}

//Слайдер для индвидуальной страницы новости
let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
	showSlides((slideIndex += n));
}

function showSlides(n) {
	let slides = document.getElementsByClassName("slides");
	if (n >= slides.length) {
		slideIndex = 0;
	} else if (n < 0) {
		slideIndex = slides.length - 1;
	} else {
		slideIndex = n;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex].style.display = "flex";
	slides[slideIndex].style.alignItems = "flex-end";
	slides[slideIndex].style.justifyContent = "space-around";
}
