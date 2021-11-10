var html = document.querySelector("html");
var toggle = document.querySelector("#menu-toggle");
var toggleImg = document.querySelector("#menu-toggle img");
var menu = document.querySelector("#primary-menu");
var nav = document.querySelector("#primary-nav");
var activeLink = document.querySelector("#primary-menu a.active");
var mainContent = document.querySelector("#content");

// if JavaScript is enabled, add the js class to the html element
html.classList.add("js");

toggle.addEventListener("click", function(){
  // if the mobile nav is open on click, close it
  if (nav.classList.contains("is-active")) {
    menu.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-active");
    // change the button image to the hamburger icon and change alt text, width, and height to match
    toggleImg.setAttribute("src", "assets/shared/icon-hamburger.svg");
    toggleImg.setAttribute("alt", "Open main menu");
    toggleImg.style.width = "24px";
    toggleImg.style.height = "21px";
    // if the mobile nav is closed on click, open it
  } else {
    nav.classList.add("is-active");
    menu.setAttribute("aria-expanded", "true");
    // change the button image to the close icon and change alt text, width, and height to match
    toggleImg.setAttribute("src", "assets/shared/icon-close.svg");
    toggleImg.setAttribute("alt", "Close main menu");
    toggleImg.style.width = "19px";
    toggleImg.style.width = "19px";
  }
});

// if the active link is clicked, close the movile navigation menu
activeLink.addEventListener("click", function(){
  if (nav.classList.contains("is-active")) {
    menu.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-active");
    // change the toggle button image to the hamburger icon and change alt text, width, and height to match
    toggleImg.setAttribute("src", "assets/shared/icon-hamburger.svg");
    toggleImg.setAttribute("alt", "Open main menu");
    toggleImg.style.width = "24px";
    toggleImg.style.height = "21px";
  }
});