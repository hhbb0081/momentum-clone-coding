const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // img 태그 생성
bgImage.src = `img/${chosenImage}`;
console.log(bgImage);
document.body.appendChild(bgImage);