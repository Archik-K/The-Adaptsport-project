//Преход с общей страницы новостей на индивидуальную
document.querySelectorAll(".news__item").forEach((item) => {
	item.addEventListener("click", () => {
		const newsId = item.getAttribute("data-news-id");
		window.location.href = `news-detail.html?id=${newsId}`;
	});
});
