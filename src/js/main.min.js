var hamburger = document.getElementById("hamburger");
var menu = document.getElementById("menu");
var header = document.getElementsByTagName("header")[0];
var spans = document.getElementsByTagName("span");
var photos = document.getElementsByClassName("photo");
var bigPicture = document.getElementById("big-picture");
var bigPictureImg = document.getElementById("big-picture-img");

var biographySection = document.getElementById("biography-section");
var musicSection = document.getElementById("music-section");
var photosSection = document.getElementById("photos-section");

var bioBtn = document.getElementById("bio");
var musicBtn = document.getElementById("music");
var photosBtn = document.getElementById("photos");

var count = 0;

hamburger.addEventListener("click", function () {
  if (count === 0) {
    menu.style.display = "flex";
    header.style.left = "0";
    spans[1].style.display = "none";
    spans[0].style.position = "absolute";
    spans[2].style.position = "absolute";
    spans[0].style.transform = "rotate(45deg)";
    spans[2].style.transform = "rotate(-45deg)";
    hamburger.style.justifyContent = "center";
    count++;
  } else {
    menu.style.display = "none";
    header.style.left = "-50vw";
    spans[1].style.display = "block";
    spans[0].style.position = "relative";
    spans[2].style.position = "relative";
    spans[0].style.transform = "rotate(0deg)";
    spans[2].style.transform = "rotate(0deg)";
    hamburger.style.justifyContent = "space-around";
    count = 0;
  }
});

bioBtn.addEventListener("click", function () {
  biographySection.style.display = "block";
  musicSection.style.display = "none";
  photosSection.style.display = "none";

  bioBtn.style.textDecoration = "underline";
  musicBtn.style.textDecoration = "none";
  photosBtn.style.textDecoration = "none";
});

musicBtn.addEventListener("click", function () {
  biographySection.style.display = "none";
  musicSection.style.display = "block";
  photosSection.style.display = "none";

  bioBtn.style.textDecoration = "none";
  musicBtn.style.textDecoration = "underline";
  photosBtn.style.textDecoration = "none";
});

photosBtn.addEventListener("click", function () {
  biographySection.style.display = "none";
  musicSection.style.display = "none";
  photosSection.style.display = "grid";

  bioBtn.style.textDecoration = "none";
  musicBtn.style.textDecoration = "none";
  photosBtn.style.textDecoration = "underline";
});

for (let i = 0; i < photos.length; i++) {
  photos[i].addEventListener("click", function () {
    bigPicture.style.display = "flex";
    bigPictureImg.src = photos[i].src;
    bigPictureImg.alt = photos[i].alt;
    bigPictureImg.title = photos[i].title;
  });
}

bigPicture.addEventListener(
  "mousedown",
  () => (bigPicture.style.display = "none")
);
bigPictureImg.addEventListener(
  "mousedown",
  () => (bigPicture.style.display = "none")
);
