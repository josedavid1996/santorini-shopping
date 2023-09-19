const $document = document
const $menuMobile = $document.querySelector(".navigation-mobile")
const $menu = $document.querySelector("#menu")

$menu.addEventListener("click", () => {
  $menuMobile.style.right = "0px"
})

$menuMobile.addEventListener("click", () => {
  $menuMobile.style.right = "100%"
})


