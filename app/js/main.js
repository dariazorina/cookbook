
// Основные переменные
const 
	body = document.querySelector('body'),
	html = document.querySelector('html'),
	menu = document.querySelectorAll('.header__burger, .header__nav, body');
// /Основные переменные

// Висчитывания размера картинки и вставка этого размера в качестве aspect-ratio.
// Используеться для того чтобы задать высоту картинки при этом не потеряв адаптивность.
// Обычно используется для картинок с loading=lazy чтобы картинки "не прыгали" и не двигали контент сайта
const imageAspectRatio = document.querySelectorAll('.image-aspect-ratio, figure img');
imageAspectRatio.forEach(imageAspectRatio => {
	if(imageAspectRatio.getAttribute('width') && imageAspectRatio.getAttribute('height'))
		imageAspectRatio.style.setProperty('--aspect-ratio', `${imageAspectRatio.getAttribute("width")}/${imageAspectRatio.getAttribute("height")}`);
	
})

// /Висчитывания размера картинки и вставка этого размера в качестве aspect-ratio



// События нажатия

body.addEventListener('click', function (event) {

	function $(elem) {
		return event.target.closest(elem)
	}


	// Меню в шапке
	
	if ($('.header__burger')) {
	
		menu.forEach(element => {
			element.classList.toggle('is-mobile-menu-active')
		})
	
	}
	
	if ($('.header__nav-close, .header__nav-background')) {
	
		menu.forEach(element => {
			element.classList.remove('is-mobile-menu-active')
		})
	
	}
	
	// /Меню в шапке


	// =-=-=-=-=-=-=-=-=-=-=-=- <click> -=-=-=-=-=-=-=-=-=-=-=-=
	
	/* const recipePortionsButton = $(".recipe__portions button")
	if(recipePortionsButton) {

		const input = recipePortionsButton.parentElement.querySelector("input");
	
		if(recipePortionsButton.hasAttribute("data-minus")) {
			input.value = 
		}
	
	} */
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </click> -=-=-=-=-=-=-=-=-=-=-=-=

	
	

})

// /События нажатия



// Отслеживания изменения размера экрана

// Переменная которая хранит размер экрана
let windowSize = 0;

function resize() {

	// Сохранения параметра размера высоты экрана для использования в стилях (по аналогии с 1vh в css). 
	// Приходится так делать потому-что 1vh в css работает неправильно на моб устройствах.
	// Хоть в css уже есть такие единицы измерения как dvh которые работают как нада,
	// но из-за того что он не везде поддерживается браузерами, приходится использовать вот такой способ через js
	html.style.setProperty("--vh", (window.innerHeight * 0.01).toFixed(2) + "px");

	// Сохранения параметра размера высоты экрана (по аналогии с 1svh в css). Опять же для старых браузеров
	windowSize != window.innerWidth && html.style.setProperty("--svh", (window.innerHeight * 0.01).toFixed(2) + "px");
	
	// Сохранения размера скролбара для использования в стилях
	!body.classList.contains("is-mobile-menu-active") && html.style.setProperty("--scrollbar-size", (window.innerWidth - body.offsetWidth) + "px");
	
}

// Запуск и привязка функции к соьытию изменения экрана
resize();
window.addEventListener('resize', resize)

// /Отслеживания изменения размера экрана



// Слайдеры
// Подробнее об плагине который я использую: https://splidejs.com/guides/getting-started/

document.querySelectorAll('.history__gallery').forEach(sliderElement => {

	const slider = new Splide(sliderElement, {

		type: "loop",

		autoWidth: true,
		gap: 16,

		easing: "ease",

		pagination: false,

	});

	slider.mount();

})

// /Слайдеры


// Подсчитывания порций

document.querySelectorAll(".recipe__portions").forEach(recipePortions => {

	// Сохранения основных переменных
	const input = recipePortions.querySelector("input"),
	minus = recipePortions.querySelector("button[data-minus]"),
	plus = recipePortions.querySelector("button[data-plus]");

	// Запрет на ввод всех символов кроме цифр
	input.addEventListener("input", () => {
		input.value = input.value.replace(/[^+\d]/g, "");
	})

	// Подсчет максимального и минимально количества порций
	input.addEventListener("blur", () => {
		if(input.value <= 0) input.value = 1; 
		else if(input.value >= input.max) input.value = input.max;
	})

	// Кнопка для уменьшения порции на -1
	minus.addEventListener("click", () => {
		input.value = Number(input.value) - 1 ? Number(input.value) - 1 : 1;
	})

	// Кнопка для увеличения порции на +1
	plus.addEventListener("click", () => {
		input.value = Number(input.value) + 1 <= input.max ? Number(input.value) + 1 : input.max;
	})

})

// /Подсчитывания порций
