// Page elements
const hamb = document.querySelector('.hamb')
const navigation = document.querySelector('.navigation')

// Functions
const toggle = (elem, cls) => {
    elem.classList.toggle(cls)
}

// Event listeners
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