"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

//Method 1
// const listElements = ingredients.map(function (ingredient) {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   return li;
// });

// listElements.forEach(function (li) {
//   ingredientsList.appendChild(li);
// });

//Method 2
for (let i = 0; i < ingredients.length; i++) {
  const li = document.createElement("li");
  li.textContent = ingredients[i];
  li.classList.add("item");
  ingredientsList.appendChild(li);
}

//Method 3
// ingredientsList.innerHTML = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");

console.log(ingredientsList);
