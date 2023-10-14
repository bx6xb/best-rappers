// Page elements
const root = document.querySelector(':root')
const parallax = document.querySelectorAll('.parallax')
window.scrollTo(0, 0)

// JS variables
const parallaxIndex = 4

// Functions
const makeParallax = (elem, index) => {
  elem.style.top = `${Math.floor(
    elem.getBoundingClientRect().top / index / parallaxIndex
  )}px`
}

// Event listeners
window.addEventListener('scroll', () => {
  root.style.setProperty(
    '--scrolled',
    `-${Math.floor(this.scrollY / parallaxIndex)}px`
  )
})

parallax.forEach((item) => {
  const halfOfItem = Math.floor(
    parseInt(getComputedStyle(item).getPropertyValue('height'))
  )
  if (item.classList.contains('parralax-long')) {
    makeParallax(item, 3)
  } else {
    makeParallax(item, 1.05)
  }
})
