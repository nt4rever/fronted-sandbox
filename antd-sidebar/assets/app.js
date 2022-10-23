const subMenu = document.querySelectorAll(".menu__submenu");
function subMenuOnClick() {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    this.nextElementSibling.classList.add("hidden");
  } else {
    this.classList.add("active");
    this.nextElementSibling.classList.remove("hidden");
  }
}
Array.from(subMenu).forEach((element) => {
  element.addEventListener("click", subMenuOnClick);
});

const menuItem = document.querySelectorAll(".menu__item");
function itemMenuOnClick() {
  menuItem.forEach((e) => {
    e.classList.remove("active");
  });
  this.classList.add("active");
}
Array.from(menuItem).forEach((element) => {
  element.addEventListener("click", itemMenuOnClick);
});

let isToggle = false;
function collapseFunc() {
  isToggle = true;
  document.querySelector(".sidebar .brand__logo h1").style.display = "none";
  document.querySelectorAll(".sidebar .ant-icon+span").forEach((e) => {
    e.style.display = "none";
  });
  document.querySelector(".sidebar .sidebar__switch-theme").style.display =
    "none";

  document.querySelector(".wrapper__sidebar").classList.add("isToggle");
  document.querySelector(".wrapper__container").classList.add("isToggle");
}

function expandFunc() {
  isToggle = false;
  document.querySelector(".sidebar .brand__logo h1").style.display = "";
  document.querySelectorAll(".sidebar .ant-icon+span").forEach((e) => {
    e.style.display = "";
  });
  setTimeout(() => {
    document.querySelector(".sidebar .sidebar__switch-theme").style.display =
      "flex";
  }, 200);
  document.querySelector(".wrapper__sidebar").classList.remove("isToggle");
  document.querySelector(".wrapper__container").classList.remove("isToggle");
}
function toggleFunc() {
  isToggle = !isToggle;
  if (isToggle) {
    collapseFunc();
  } else {
    expandFunc();
  }
}

document.getElementById("btn-toggle").onclick = toggleFunc;

function toggleFuncResponsive(x) {
  if (x.matches && isToggle == false) {
    collapseFunc();
  } else {
    expandFunc();
  }
}

var x = window.matchMedia("(max-width: 700px)");
toggleFuncResponsive(x); // Call listener function at run time
x.addListener(toggleFuncResponsive); // Attach listener function on state changes
