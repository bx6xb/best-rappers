// Page elements
const switcherHeader = document.querySelector('.switcher-header')
const rapperInfoSection = document.querySelectorAll('.rapper-info-section')
const bioAlbumsGallery = document.querySelector('.bio-albums-gallery')
const gallery = document.querySelector('.gallery')
const bigPicture = document.querySelector('.big-picture')

// JS variables
const headers = ['Biography', 'Albums', 'Gallery']

// Functions
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
  bigPicture.innerHTML = elem
  toggle(bigPicture, 'hide')
  document.addEventListener('click', hideBigPicture)
}
  
const hideBigPicture = () => {
  bigPicture.innerHTML = ''
  toggle(bigPicture, 'hide')
  document.removeEventListener('click', hideBigPicture)
}

// Event listeners
gallery.addEventListener('click', (e)=>{
  if (e.target.classList.contains('gallery-photo')) {
    zoomPhoto(e.target)
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
  } else if (e.target.classList.contains('gallery-photo')) {
    zoomPhoto(e.target)
  }
})
