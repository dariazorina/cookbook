// Подсчитывания порций

document.querySelectorAll(".recipe__portions").forEach((recipePortions) => {
	// Сохранения основных переменных
	const input = recipePortions.querySelector("input"),
		minus = recipePortions.querySelector("button[data-minus]"),
		plus = recipePortions.querySelector("button[data-plus]"),
		origPortions = Number(input.dataset.portions);
		
	function change() {

		const portionsQuantity = input.value;

    	document.querySelectorAll(".recipe__ingredients label").forEach(label => {

			const input = label.querySelector("input"),
			element = label.querySelectorAll("span")[1];
			
			if(input.dataset.label) {
				const text = input.dataset.label,
				quantity = Number(input.dataset.quantity),
				type = input.dataset.type ? ` ${input.dataset.type}` : "";
				
				if(quantity) {
					const newValue = (quantity / (origPortions || 1)) * portionsQuantity;
					element.innerHTML = `${newValue}&#8202;${String(type).trim()} ${text}`;
				}
			}
		})
	}

	document.querySelectorAll(".recipe-plan-card__inner").forEach(card => {
		card.addEventListener("click", (event) => {
			if(!card.classList.contains("is-active")) {
				document.querySelectorAll(".recipe-plan-card__inner.is-active").forEach(activeCard => activeCard.classList.remove("is-active"))
				card.classList.add("is-active");
			}
		})
	})

	// Запрет на ввод всех символов кроме цифр
	input.addEventListener("input", () => {
		input.value = input.value.replace(/[^+\d]/g, "");
	});

	// Подсчет максимального и минимально количества порций
	input.addEventListener("blur", () => {
		if (Number(input.value) <= 1) input.value = 1;
		else if (Number(input.value) >= Number(input.max)) input.value = input.max;

		change();
	});

	// Кнопка для уменьшения порции на -1
	minus.addEventListener("click", () => {
		input.value = Number(input.value) - 1 ? Number(input.value) - 1 : 1;

		change();
	});

	// Кнопка для увеличения порции на +1
	plus.addEventListener("click", () => {
		input.value = Number(input.value) + 1 <= Number(input.max) ? Number(input.value) + 1 : Number(input.max);

		change();
	});
});

