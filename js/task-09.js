"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//const body = document.body;
const changeColorBtn = document.querySelector(".change-color");
const spanWithSelectedColor = document.querySelector(".color");

const colorSelector = () => {
  const setColor = getRandomHexColor();
  spanWithSelectedColor.textContent = setColor;
  document.body.style.background = setColor;
};

changeColorBtn.addEventListener("click", colorSelector);
