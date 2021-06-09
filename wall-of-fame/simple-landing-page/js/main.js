"use strict";

function openNav() {
  document.getElementById("navigationContainer").classList.add("nav-open");
}

function closeNav() {
  document.getElementById("navigationContainer").classList.remove("nav-open");
}

function checkClickLocation(ev, node) {
  var { target } = ev;

  do {
    if (target === node) {
      return true;
    }
    target = target.parentNode;
  } while (target);

  return false;
}

document.addEventListener("click", function (ev) {
  var navigationContainer = document.getElementById("navigationContainer");
  var openNavIcon = document.getElementById("openNavIcon");

  if (
    !checkClickLocation(ev, navigationContainer) &&
    !checkClickLocation(ev, openNavIcon)
  ) {
    closeNav();
  }
});
