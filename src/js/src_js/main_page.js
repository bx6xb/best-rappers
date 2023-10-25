// Page elements
const parallax = document.querySelectorAll('.parallax')
const root = document.querySelector(':root')

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
window.addEventListener('scroll', () => {
  root.style.setProperty(
    '--scrolled',
    `-${Math.floor(this.scrollY / parallaxIndex)}px`
  )
})

// Call functions
window.scrollTo(0, 0)

parallax.forEach((item) => {
  const halfOfItem = Math.floor(
    parseInt(getComputedStyle(item).getPropertyValue('height'))
  )
  if (item.classList.contains('parralax-long')) {
    makeParallax(item, 3, 100)
  } else {
    makeParallax(item, 1.05)
  }
})
