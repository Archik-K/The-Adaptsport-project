$(document).ready(function () {
	$(".slick-wrapper").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: true,
		dots: true,
		pauseOnFocus: false,
		nextArrow: "<button type='button' class='slick-next'></button>",
		prevArrow: "<button type='button' class='slick-prev'></button>",
	});
	$(".wait-slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
	});
	//scroll-top
	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 400) {
			$("#top-button").fadeOut(500);
		} else {
			$("#top-button").fadeIn(500);
		}
	});
	$("#top-button").on("click", function () {
		$("body,html").animate(
			{
				scrollTop: 0,
			},
			800
		);
		return false;
	});

	const prev = document.getElementById("slider-prev"),
		next = document.getElementById("slider-next"),
		slides = document.querySelectorAll(".slick-slide");

	let index = 0;

	const activeSlide = (n) => {
		for (slide of slides) {
			slide.classList.remove("active");
		}
		slides[n].classList.add("active");
	};

	const prepareCurrentSlide = (ind) => {
		activeSlide(ind);
	};

	const nextSlide = () => {
		if (index == slides.length - 1) {
			index = 0;
			prepareCurrentSlide(index);
		} else {
			index++;
			prepareCurrentSlide(index);
		}
	};
	const prevSlide = () => {
		if (index == 0) {
			index = slides.length - 1;
			prepareCurrentSlide(index);
		} else {
			index--;
			prepareCurrentSlide(index);
		}
	};

	next.addEventListener("click", nextSlide);
	prev.addEventListener("click", prevSlide);
});
console.log();
