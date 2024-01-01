// Page elements
const switcher = document.querySelector(".switcher")
const switcherHeader = document.querySelector(".switcher-header")
const slider = document.querySelector(".slider")
const rapperInfoSection = document.querySelectorAll(".rapper-info-section")
const bioAlbumsGallery = document.querySelector(".bio-albums-gallery")
const gallery = document.querySelector(".gallery")
const bigPicture = document.querySelector(".big-picture")

// JS variables
const headers = ["Biography", "Albums", "Gallery"]

// Functions
const zoomPhoto = (elem) => {
  const image = document.createElement("img")
  image.src = elem.src
  image.alt = elem.src
  window.innerWidth > window.innerHeight
    ? image.classList.add("width")
    : image.classList.add("height")

  bigPicture.appendChild(image)
  bigPicture.removeAttribute("hidden")
  bigPicture.addEventListener("click", hideBigPicture)
}

const hideBigPicture = () => {
  bigPicture.innerHTML = ""
  bigPicture.setAttribute("hidden", true)
  bigPicture.removeEventListener("click", hideBigPicture)
}

// Event listeners
gallery.addEventListener("click", (e) => {
  if (e.target.classList.contains("gallery-photo")) {
    zoomPhoto(e.target)
  }
})

slider.addEventListener("change", () => {
  if (slider.value > 1.33) {
    slider.value = 2
  } else if (slider.value < 0.66) {
    slider.value = 0
  } else {
    slider.value = 1
  }

  rapperInfoSection.forEach((val, i) => {
    if (i === +slider.value) {
      val.removeAttribute("hidden")
      switcherHeader.innerHTML = headers[i]
    } else {
      val.setAttribute("hidden", true)
    }
  })
})
