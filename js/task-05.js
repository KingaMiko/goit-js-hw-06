"use strict";
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  nameOutput.textContent = event.currentTarget.value;
  if (nameInput.value.trim() === "") {
    nameOutput.textContent = "Anonymous";
  }
});

// Zwykła funkcja
// nameInput.addEventListener("input", function () {
//   nameOutput.textContent = this.value;
//   if (nameInput.value.trim() === "") {
//     nameOutput.textContent = "Anonymous";
//   }
// });
