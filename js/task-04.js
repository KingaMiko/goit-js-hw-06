"use strict";
const counter = document.querySelector("#counter");
const value = counter.querySelector("#value");

const incBtn = counter.querySelector('[data-action="increment"]');
const decBtn = counter.querySelector('[data-action="decrement"]');

let counterValue = 0;

//Method 1
function updateCounterValue(newValue) {
  counterValue = newValue;
  value.textContent = counterValue;
}

//Method 2
// const updateCounterValue = (newValue) => {
//   counterValue = newValue;
//   value.textContent = counterValue;
// };

incBtn.addEventListener("click", () => {
  updateCounterValue(counterValue + 1);
});

decBtn.addEventListener("click", () => {
  updateCounterValue(counterValue - 1);
});
