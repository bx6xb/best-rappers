// Page elements
const hamb = document.querySelector('.hamb')
const navigation = document.querySelector('.navigation')

// Functions
const toggle = (elem, cls) => {
  elem.classList.toggle(cls)
}

// Event listeners
hamb.addEventListener('click', () => {
  if (!navigation.classList.contains('left')) {
    toggle(navigation, 'left')
  } else {
    toggle(navigation, 'left')
  }
})
