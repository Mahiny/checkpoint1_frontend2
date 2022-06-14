const cards = JSON.parse(localStorage.getItem("card"));
cards.map((card)=>createcard(card))
console.log(card)

function createcard({ imageUrl, title, description }) {
  const grade = document.querySelector('.grade')
  const div = document.createElement("div");
  div.setAttribute("class", "centro");

  div.innerHTML = `<div class="card2">
    <img src="${imageUrl}" class="photo" />
    <div class="title">${title}</div>
    <div class="description">${description}</div>
  </div>`;

  grade.appendChild(div)
}
/* const photo = document.querySelector(".photo");
const titleText = document.querySelector(".title");
const descriptionText = document.querySelector(".description");

photo.src = imageUrl;
titleText.innerHTML = title;
descriptionText.innerHTML = description; */


