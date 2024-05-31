const carousel = document.querySelector(".onlyslides");
let backBtn = document.getElementById("back");
let nextBtn = document.getElementById("next"); 

let isDragStart = false, prevPageX, prevScrollLeft;


const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = (e) => {
    isDragStart = false;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);

nextBtn.addEventListener("click", () => {
    carousel.style.scrollBehavior = "smooth";
    carousel.scrollLeft += 900;
})

backBtn.addEventListener("click", () => {
    carousel.style.scrollBehavior = "smooth";
    carousel.scrollLeft -= 900;
})


function login(){
    location.href='login.html';
}

const insp = document.querySelector(".inspimg");
let upBtn = document.getElementById("uparrow");
let downBtn = document.getElementById("downarrow"); 


upBtn.addEventListener("click", () => {
    insp.style.scrollBehavior = "smooth";
    insp.scrollTop += 1010;
})

downBtn.addEventListener("click", () => {
    insp.style.scrollBehavior = "smooth";
    insp.scrollTop -= 1010;
})
