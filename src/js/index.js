var hamburger = document.getElementById('hamburger'),
  menu = document.getElementById('menu'),
  header = document.getElementsByTagName('header')[0],
  spans = document.getElementsByTagName('span'),
  photos = document.getElementsByClassName('photo'),
  bigPicture = document.getElementById('big-picture'),
  bigPictureImg = document.getElementById('big-picture-img'),
  biographySection = document.getElementById('biography-section'),
  musicSection = document.getElementById('music-section'),
  photosSection = document.getElementById('photos-section'),
  bioBtn = document.getElementById('bio'),
  musicBtn = document.getElementById('music'),
  photosBtn = document.getElementById('photos'),
  count = 0
hamburger.addEventListener('click', function () {
  0 === count
    ? ((menu.style.display = 'flex'),
      (header.style.left = '0'),
      (spans[1].style.display = 'none'),
      (spans[0].style.position = 'absolute'),
      (spans[2].style.position = 'absolute'),
      (spans[0].style.transform = 'rotate(45deg)'),
      (spans[2].style.transform = 'rotate(-45deg)'),
      (hamburger.style.justifyContent = 'center'),
      count++)
    : ((menu.style.display = 'none'),
      (header.style.left = '-50vw'),
      (spans[1].style.display = 'block'),
      (spans[0].style.position = 'relative'),
      (spans[2].style.position = 'relative'),
      (spans[0].style.transform = 'rotate(0deg)'),
      (spans[2].style.transform = 'rotate(0deg)'),
      (hamburger.style.justifyContent = 'space-around'),
      (count = 0))
}),
  bioBtn.addEventListener('click', function () {
    ;(biographySection.style.display = 'block'),
      (musicSection.style.display = 'none'),
      (photosSection.style.display = 'none'),
      (bioBtn.style.textDecoration = 'underline'),
      (musicBtn.style.textDecoration = 'none'),
      (photosBtn.style.textDecoration = 'none')
  }),
  musicBtn.addEventListener('click', function () {
    ;(biographySection.style.display = 'none'),
      (musicSection.style.display = 'block'),
      (photosSection.style.display = 'none'),
      (bioBtn.style.textDecoration = 'none'),
      (musicBtn.style.textDecoration = 'underline'),
      (photosBtn.style.textDecoration = 'none')
  }),
  photosBtn.addEventListener('click', function () {
    ;(biographySection.style.display = 'none'),
      (musicSection.style.display = 'none'),
      (photosSection.style.display = 'grid'),
      (bioBtn.style.textDecoration = 'none'),
      (musicBtn.style.textDecoration = 'none'),
      (photosBtn.style.textDecoration = 'underline')
  })
for (let e = 0; e < photos.length; e++)
  photos[e].addEventListener('click', function () {
    ;(bigPicture.style.display = 'flex'),
      (bigPictureImg.src = photos[e].src),
      (bigPictureImg.alt = photos[e].alt),
      (bigPictureImg.title = photos[e].title)
  })
bigPicture.addEventListener(
  'mousedown',
  () => (bigPicture.style.display = 'none')
),
  bigPictureImg.addEventListener(
    'mousedown',
    () => (bigPicture.style.display = 'none')
  )
