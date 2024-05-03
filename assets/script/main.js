$(document).ready(function () {
	$(".slick-wrapper").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
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
});
console.log();
