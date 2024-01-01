// Page elements
const parallax = document.querySelectorAll(".parallax")
const root = document.querySelector(":root")

// JS variables
const parallaxIndex = 4

// Functions
const makeParallax = (elem, index, offset = 0) => {
  elem.style.top = `${
    Math.floor(elem.getBoundingClientRect().top / index / parallaxIndex) +
    offset
  }px`
}

// Event listeners
window.addEventListener("scroll", function () {
  root.style.setProperty(
    "--scrolled",
    `-${Math.floor(this.scrollY / parallaxIndex)}px`
  )
})

// Call functions
parallax.forEach((item) => {
  if (item.classList.contains("parallax-long")) {
    makeParallax(item, 3, 100)
  } else {
    makeParallax(item, 1.05)
  }
})
