// Подсчитывания порций

document.querySelectorAll(".recipe__portions").forEach((recipePortions) => {
	// Сохранения основных переменных
	const input = recipePortions.querySelector("input"),
		minus = recipePortions.querySelector("button[data-minus]"),
		plus = recipePortions.querySelector("button[data-plus]");

	function change() {

		const portionsQuantity = input.value;

		document.querySelectorAll(".recipe__ingredients label").forEach(label => {

			const input = label.querySelector("input"),
			element = label.querySelectorAll("span")[1];

			if(input.dataset.label) {
				const text = input.dataset.label,
				quantity = Number(input.dataset.quantity),
				type = input.dataset.type ? ` ${input.dataset.type}` : "",
				increase = Number(input.dataset.increase);

				if(quantity) {
					if(increase) {
						const newValue = Math.round(quantity + (increase * (portionsQuantity-1)));
						element.textContent = `(${newValue}${type}) ${text}`;
					} else {
						if(increase !== 0) {
							element.textContent = `(${Math.round(quantity*portionsQuantity)}${type}) ${text}`;
						}
					}
				}
			}

		})
	}

	// Запрет на ввод всех символов кроме цифр
	input.addEventListener("input", () => {
		input.value = input.value.replace(/[^+\d]/g, "");

		change();
	});

	// Подсчет максимального и минимально количества порций
	input.addEventListener("blur", () => {
		if (input.value <= 0) input.value = 1;
		else if (input.value >= input.max) input.value = input.max;

		change();
	});

	// Кнопка для уменьшения порции на -1
	minus.addEventListener("click", () => {
		input.value = Number(input.value) - 1 ? Number(input.value) - 1 : 1;

		change();
	});

	// Кнопка для увеличения порции на +1
	plus.addEventListener("click", () => {
		input.value = Number(input.value) + 1 <= input.max ? Number(input.value) + 1 : input.max;

		change();
	});
});

