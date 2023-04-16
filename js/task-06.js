"use strict";
const validationInput = document.querySelector("#validation-input");
const lengthValue = validationInput.getAttribute("data-length");
//or const lengthValue = validationInput.dataset.length;

// validationInput.addEventListener("blur", () => {
//   if (validationInput.value.trim().length === parseInt(lengthValue)) {
//     validationInput.classList.add("valid");
//     validationInput.classList.remove("invalid");
//   } else {
//     validationInput.classList.add("invalid");
//     validationInput.classList.remove("valid");
//   }
// });

// Opcja z niewypełnionym pustem polem i powrotem do stanu szarego podświetlenia
validationInput.addEventListener("blur", () => {
  if (validationInput.value.trim().length === 0) {
    validationInput.classList.remove("valid", "invalid");
  } else if (validationInput.value.trim().length === parseInt(lengthValue)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});

// validationInput.addEventListener("blur", () => {
//   validationInput.classList.toggle(
//     "valid",
//     validationInput.value.trim().length === parseInt(lengthValue)
//   );
//   validationInput.classList.toggle(
//     "invalid",
//     validationInput.value.trim().length !== parseInt(lengthValue)
//   );
// });

// Opcja z niewypełnionym pustem polem i powrotem do stanu szarego podświetlenia
// validationInput.addEventListener("blur", () => {
//   validationInput.classList.toggle(
//     "gray",
//     validationInput.value.trim().length === 0
//   );
//   validationInput.classList.toggle(
//     "valid",
//     validationInput.value.trim().length === parseInt(lengthValue)
//   );
//   validationInput.classList.toggle(
//     "invalid",
//     validationInput.value.trim().length > 0 &&
//       validationInput.value.trim().length !== parseInt(lengthValue)
//   );
// });

// validationInput.addEventListener("blur", () => {
//   if (validationInput.value.trim().length === Number(lengthValue)) {
//     validationInput.classList.add("valid");
//     validationInput.classList.remove("invalid");
//   } else {
//     validationInput.classList.add("invalid");
//     validationInput.classList.remove("valid");
//   }
// });
