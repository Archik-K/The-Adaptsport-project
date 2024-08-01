const initSlider = (sliderId) => {
	const slider = document.querySelector(`#${sliderId} .items`);
	const slides = document.querySelectorAll(`#${sliderId} .item`);
	const buttons = document.querySelectorAll(`#${sliderId} .button`);

	let current = 0;
	let prev = slides.length - 1;
	let next = 1;

	// Обновление кнопок
	const updateButtons = () => {
		buttons[0].classList.add("prev"); // Кнопка влево
		buttons[1].classList.add("next"); // Кнопка вправо
	};

	// Добавляем обработчики событий для кнопок
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", () =>
			i === 0 ? gotoPrev() : gotoNext()
		);
	}

	const gotoPrev = () =>
		current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

	const gotoNext = () =>
		current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);

	const gotoNum = (number) => {
		current = number;
		prev = current - 1;
		next = current + 1;

		for (let i = 0; i < slides.length; i++) {
			slides[i].classList.remove("active");
			slides[i].classList.remove("prev");
			slides[i].classList.remove("next");
		}

		if (next === slides.length) {
			next = 0;
		}

		if (prev === -1) {
			prev = slides.length - 1;
		}

		slides[current].classList.add("active");
		slides[prev].classList.add("prev");
		slides[next].classList.add("next");
	};

	// Обновляем кнопки при инициализации
	updateButtons();
	gotoNum(0); // Инициализировать слайдер
};

// Инициализация каждого слайдера
initSlider("swimming-slider");
initSlider("football-slider");
initSlider("modeling-agency-slider");
initSlider("cross-country-skiing-slider");
initSlider("powerlifting-slider");
initSlider("table-tennis-slider");
initSlider("art-studio-slider");
initSlider("solar-volunteers-slider");
initSlider("adaptive-rock-climbing-slider");
initSlider("wellness-wushu-slider");
initSlider("rowing-slider");
