// Page elements
const root = document.querySelector(':root')
const parallax = document.querySelectorAll('.parallax')
window.scrollTo(0, 0)

// JS variables
const parallaxIndex = 4

// Event listeners
window.addEventListener('scroll', () => {
  root.style.setProperty(
    '--scrolled',
    `-${Math.floor(this.scrollY / parallaxIndex)}px`
  )
})

parallax.forEach((item) => {
  item.style.top = `${Math.floor(
    item.getBoundingClientRect().top / parallaxIndex
  )}px`
})
