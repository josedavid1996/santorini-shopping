const $document = document
const $menuMobile = $document.querySelector(".navigation-mobile")
const $menu = $document.querySelector("#menu")


$document.addEventListener("click", (e) => {
  console.log(e.target === $menu)
  if (e.target === $menu) {
    $menuMobile.style.right = "0px"
  }
  if (e.target === $menuMobile) {
    $menuMobile.style.right = "100%"
  }
})