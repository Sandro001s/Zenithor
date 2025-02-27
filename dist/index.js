"use strict";
const carousel = document.querySelector(".onlyslides");
const backBtn = document.getElementById("back");
const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", () => {
    carousel.style.scrollBehavior = "smooth";
    carousel.scrollLeft += 900;
});
backBtn.addEventListener("click", () => {
    carousel.style.scrollBehavior = "smooth";
    carousel.scrollLeft -= 900;
});
function login() {
    location.href = 'login.html';
}
function signUp() {
    location.href = 'signup.html';
}
const insp = document.querySelector(".inspimg");
const upBtn = document.getElementById("uparrow");
const downBtn = document.getElementById("downarrow");
upBtn.addEventListener("click", () => {
    insp.style.scrollBehavior = "smooth";
    insp.scrollTop += 1010;
});
downBtn.addEventListener("click", () => {
    insp.style.scrollBehavior = "smooth";
    insp.scrollTop -= 1010;
});
upBtn.addEventListener("click", () => {
    for (let i = 0; i < 3; i++) {
        console.log(i);
    }
});
