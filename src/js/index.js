// Page elementsment.querySelector(':root')
const parallax = document.querySelectorAll('.parallax')
const root = document.querySelector(':root')
const switcherHeader = document.querySelector('.switcher-header')
const rapperInfoSection = document.querySelectorAll('.rapper-info-section')
const bioAlbumsGallery = document.querySelector('.bio-albums-gallery')

// JS variables
const parallaxIndex = 4
const headers = ['Biography', 'Albums', 'Gallery']

// Functions
const makeParallax = (elem, index) => {
  elem.style.top = `${Math.floor(
    elem.getBoundingClientRect().top / index / parallaxIndex
  )}px`
}

const switchSlide = () => {
  if (count === 3) {
    count = 0
  } else if (count === -1) {
    count = 2
  }
  rapperInfoSection.forEach((val, i) => {
    if (i === count) {
      val.classList.remove('hide')
      switcherHeader.innerHTML = headers[i]
    } else {
      val.classList.add('hide')
    }
  })
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
    makeParallax(item, 3)
  } else {
    makeParallax(item, 1.05)
  }
})

let count = 0
bioAlbumsGallery.addEventListener('click', (e) => {
  if (e.target.classList.contains('left-arrow')) {
    count--
    switchSlide()
  } else if (e.target.classList.contains('right-arrow')) {
    count++
    switchSlide()
  }
})
