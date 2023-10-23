// Page elements
const parallax = document.querySelectorAll('.parallax')
const root = document.querySelector(':root')
const switcherHeader = document.querySelector('.switcher-header')
const rapperInfoSection = document.querySelectorAll('.rapper-info-section')
const bioAlbumsGallery = document.querySelector('.bio-albums-gallery')
const bigPicture = document.querySelector('.big-picture')
const hamb = document.querySelector('.hamb')
const navigation = document.querySelector('.navigation')

// JS variables
const parallaxIndex = 4
const headers = ['Biography', 'Albums', 'Gallery']

// Functions
const toggle = (elem, cls) => {
  elem.classList.toggle(cls)
}

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

const zoomPhoto = (elem) => {
  const img = document.createElement('img')
  img.src = elem.src
  img.alt = elem.alt
  img.title = elem.title
  bigPicture.appendChild(img)
  toggle(bigPicture, 'hide')
  document.addEventListener('click', hideBigPicture)
}

const hideBigPicture = () => {
  bigPicture.innerHTML = ''
  toggle(bigPicture, 'hide')
  document.removeEventListener('click', hideBigPicture)
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
if (typeof bioAlbumsGallery == 'null') {
  bioAlbumsGallery.addEventListener('click', (e) => {
    if (e.target.classList.contains('left-arrow')) {
      count--
      switchSlide()
    } else if (e.target.classList.contains('right-arrow')) {
      count++
      switchSlide()
    } else if (e.target.classList.contains('gallery-photo')) {
      zoomPhoto(e.target)
    }
  })
}

hamb.addEventListener('click', () => {
  if (!navigation.hasAttribute('style')) {
    toggle(navigation, 'move-menu')
    setTimeout(() => {
      navigation.style.left = '0'
      toggle(navigation, 'move-menu')
    }, 290)
  } else {
    toggle(navigation, 'move-menu-rev')
    setTimeout(() => {
      navigation.removeAttribute('style')
      toggle(navigation, 'move-menu-rev')
    }, 290)
  }
})
