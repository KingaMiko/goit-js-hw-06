const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

// Method practice
// for (const image of images) {
//   const li = document.createElement("li");
//   const img = document.createElement("img");
//   img.src = image.url;
//   img.alt = image.alt;
//   li.appendChild(img);
//   gallery.appendChild(li);
// }

// Method 1
const galleryImage = images
  .map((image) => `<li> <img src="${image.url}" alt="${image.alt}"> </li>`)
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryImage);

//Method 2
// gallery.insertAdjacentHTML(
//   "beforeend",
//   images
//     .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`)
//     .join("")
// );
