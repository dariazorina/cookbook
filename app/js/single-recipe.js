// Подсчитывания порций

document.querySelectorAll(".recipe__portions").forEach((recipePortions) => {
    // Сохранения основных переменных
    const input = recipePortions.querySelector("input"),
      minus = recipePortions.querySelector("button[data-minus]"),
      plus = recipePortions.querySelector("button[data-plus]");
  
    // Запрет на ввод всех символов кроме цифр
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^+\d]/g, "");
    });
  
    // Подсчет максимального и минимально количества порций
    input.addEventListener("blur", () => {
      if (input.value <= 0) input.value = 1;
      else if (input.value >= input.max) input.value = input.max;
    });
  
    // Кнопка для уменьшения порции на -1
    minus.addEventListener("click", () => {
      input.value = Number(input.value) - 1 ? Number(input.value) - 1 : 1;
    });
  
    // Кнопка для увеличения порции на +1
    plus.addEventListener("click", () => {
      input.value =
        Number(input.value) + 1 <= input.max
          ? Number(input.value) + 1
          : input.max;
    });
  });
  
  