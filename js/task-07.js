"use script";
const inputFontSizeControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

//Method 1
//spanText.style.fontSize = `${inputFontSizeControl.value}px`;
// inputFontSizeControl.addEventListener("input", (event) => {
//   const fontSize = event.currentTarget.value;
//   spanText.style.fontSize = `${fontSize}px`;
// });

//Method 2
// spanText.style.fontSize = `${inputFontSizeControl.value}px`;
// inputFontSizeControl.addEventListener("input", () => {
//   spanText.style.fontSize = `${inputFontSizeControl.value}px`;
// });

//Method 3
function updateFontSize() {
  spanText.style.fontSize = `${inputFontSizeControl.value}px`;
}
updateFontSize();

inputFontSizeControl.addEventListener("input", updateFontSize);
