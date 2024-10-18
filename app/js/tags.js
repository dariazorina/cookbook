const tagFewIngredients = document.getElementById("tag-few-ingredients");
if (tagFewIngredients)
  tagFewIngredients.addEventListener("click", function () {
    performSearch("few ingredients");
  });

const tagEasy = document.getElementById("tag-easy");
if (tagEasy) {
  tagEasy.addEventListener("click", function () {
    performSearch("easy");
  });
}

const tagFast = document.getElementById("tag-fast");
if (tagFast) {
  tagFast.addEventListener("click", function () {
    performSearch("fast");
  });
}

const tagComfortFood = document.getElementById("tag-comfort-food");
if (tagComfortFood) {
  tagComfortFood.addEventListener("click", function () {
    performSearch("comfort-food");
  });
}

const tagParty = document.getElementById("tag-party");
if (tagParty) {
  tagParty.addEventListener("click", function () {
    performSearch("party");
  });
}

const tagClassic = document.getElementById("tag-classic");
if (tagClassic) {
  tagClassic.addEventListener("click", function () {
    performSearch("classic");
  });
}

const tagStew = document.getElementById("tag-stew");
if (tagStew) {
  tagStew.addEventListener("click", function () {
    performSearch("stew");
  });
}

const tagHome = document.getElementById("tag-home");
if (tagHome) {
  tagHome.addEventListener("click", function () {
    performSearch("home");
  });
}

const tagVegan = document.getElementById("tag-vegan");
if (tagVegan) {
  tagVegan.addEventListener("click", function () {
    performSearch("vegan");
  });
}

const tagEconom = document.getElementById("tag-econom");
if (tagEconom) {
  tagEconom.addEventListener("click", function () {
    performSearch("econom");
  });
}

const tagVegetarian = document.getElementById("tag-vegetarian");
if (tagVegetarian) {
  tagVegetarian.addEventListener("click", function () {
    performSearch("vegetarian");
  });
}

const tagQuick = document.getElementById("tag-quick");
if (tagQuick) {
  tagQuick.addEventListener("click", function () {
    performSearch("quick");
  });
}

function performSearch(query) {
  // Replace this with the actual search logic
  console.log("Searching for:", query);
}
