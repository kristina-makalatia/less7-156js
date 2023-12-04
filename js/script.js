// burger bar

let navigation = document.getElementById("navBar");
let burger = document.getElementById("burgerBar");
let ulElement = document.getElementById("ul-element");

burger.addEventListener("click", function () {
  ulElement.classList.toggle("activeNavigation");
  burger.classList.toggle("activeBurger");
});
