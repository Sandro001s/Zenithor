const carousel = document.querySelector(".onlyslides") as HTMLElement;
const backBtn = document.getElementById("back") as HTMLButtonElement;
const nextBtn = document.getElementById("next") as HTMLButtonElement;

nextBtn.addEventListener("click", (): void => {
    carousel.style.scrollBehavior = "smooth";
    carousel.scrollLeft += 900;
});

backBtn.addEventListener("click", (): void => {
    carousel.style.scrollBehavior = "smooth";
    carousel.scrollLeft -= 900;
});

function login(): void {
    location.href = 'login.html';
}

function signUp(): void {
    location.href = 'signup.html';
}

const insp = document.querySelector(".inspimg") as HTMLElement;
const upBtn = document.getElementById("uparrow") as HTMLButtonElement;
const downBtn = document.getElementById("downarrow") as HTMLButtonElement;

upBtn.addEventListener("click", (): void => {
    insp.style.scrollBehavior = "smooth";
    insp.scrollTop += 1010;
});

downBtn.addEventListener("click", (): void => {
    insp.style.scrollBehavior = "smooth";
    insp.scrollTop -= 1010;
});

upBtn.addEventListener("click", (): void => {
    for(let i = 0; i < 3; i++) {
    console.log(i);
    }
});