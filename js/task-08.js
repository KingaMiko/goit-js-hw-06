"use strict";

const form = document.querySelector(".login-form");

//Method 1 - regular function
//form.addEventListener("submit", handleSubmit);
// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password },
//   } = event.currentTarget;
//   if (email.value === "" || password.value === "") {
//     return alert("Complete all fields");
//   }
//   const formData = {
//     email: email.value,
//     password: password.value,
//   };
//   console.log(formData);
//   event.currentTarget.reset();
// }

// //Method 1 - arrow function
const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Complete all fields");
  }
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  event.currentTarget.reset();
};
// W funkcji strzałkowej nasłuchiwanie musi być zadeklarowane po funkcji
form.addEventListener("submit", handleSubmit);

//Method 2 - regular function
// form.addEventListener("submit", handleSubmit);
// function handleSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   const data = Object.fromEntries(formData.entries());

//   if (Object.values(data).some((value) => value === "")) {
//     return alert("Complete all fields");
//   }

//   console.log(data);
//   event.currentTarget.reset();
// }

//Method 2 - arrow function
// const handleSubmit = (event) => {
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   const data = Object.fromEntries(formData.entries());

//   if (Object.values(data).some((value) => value === "")) {
//     return alert("Complete all fields");
//   }

//   console.log(data);
//   event.currentTarget.reset();
// };
// form.addEventListener("submit", handleSubmit);

//Method 3
//"use strict";
//const loginForm = document.querySelector(".login-form");
//loginForm.addEventListener("submit", (event) => {
//  event.preventDefault();
//  const emailInput = event.target.elements.email;
//  const passwordInput = event.target.elements.password;
//  if (!emailInput.value || !passwordInput.value) {
//    alert("Please fill in all fields!");
//    return;
//  }
//  const formData = {
//    email: emailInput.value,
//    password: passwordInput.value,
//  };
//  console.log(formData);
//  loginForm.reset();
//});
