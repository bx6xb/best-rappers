// Page elements
const hamb = document.querySelector(".hamb")
const navigation = document.querySelector(".navigation")

// Event listeners
hamb.addEventListener("click", () => {
  !navigation.classList.contains("left")
    ? navigation.classList.add("left")
    : navigation.classList.add("remove")
})
