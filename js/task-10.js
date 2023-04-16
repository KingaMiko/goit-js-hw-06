"use strict";

const controls = document.querySelector("#controls");
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  const startSize = 30;
  const fragment = document.createDocumentFragment();

  destroyBoxes();

  for (let i = 0; i < amount; i += 1) {
    const size = startSize + i * 10;
    2;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.margin = "15px";
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener("click", () => {
  createBoxes(input.value);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
