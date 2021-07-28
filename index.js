let NavBtn = document.querySelector(".mobile-view-nav-btn");
let sideNav = document.querySelector(".side-nav");
let closebtn = document.querySelector(".close-btn");

NavBtn.addEventListener("click", function () {
  sideNav.classList.toggle("side-nav-show");
});

closebtn.addEventListener("click", function () {
  sideNav.classList.toggle("side-nav-show");
});
