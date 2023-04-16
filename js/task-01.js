"use strict";
const categoriesList = document.querySelector("#categories");
const categoriesItem = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItem.length}`);

//Method 1
// for (const item of categoriesItem) {
//   const [categoryName, numberOfItemElements] = [
//     item.querySelector("h2").textContent,
//     item.querySelectorAll("li").length,
//   ];
//   console.log(`Category: ${categoryName}
// Products: ${numberOfItemElements}`);
// }

//Method 2
categoriesItem.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const numberOfItemElements = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}
Products: ${numberOfItemElements}`);
});
