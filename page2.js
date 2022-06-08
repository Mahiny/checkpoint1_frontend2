const { imageUrl, title, description } = JSON.parse(
  localStorage.getItem("card")
);
const photo = document.querySelector(".photo");
const titleText = document.querySelector(".title");
const descriptionText = document.querySelector(".description");

photo.src = imageUrl;
titleText.innerHTML = title;
descriptionText.innerHTML = description;
