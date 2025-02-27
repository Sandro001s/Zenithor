"use strict";
const inputs = document.querySelectorAll('.input');
const submit = document.querySelector('.submit');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm-password');
const passwordError = document.getElementById('8characterError');
function errorcheck() {
    submit === null || submit === void 0 ? void 0 : submit.addEventListener("click", (event) => {
        var _a;
        event.preventDefault();
        let hasError = false;
        inputs.forEach((input) => {
            if (input.value === "") {
                input.classList.add("error");
                hasError = true;
            }
            else {
                input.classList.remove("error");
            }
        });
        if (email && !email.value.includes("@")) {
            email.classList.add("error");
            hasError = true;
        }
        else {
            email === null || email === void 0 ? void 0 : email.classList.remove("error");
        }
        passwordCheck();
        if (!hasError && (password === null || password === void 0 ? void 0 : password.classList.contains("error")) === false) {
            (_a = submit.closest("form")) === null || _a === void 0 ? void 0 : _a.submit();
        }
    });
}
errorcheck();
function passwordCheck() {
    let passwordErrorText = "Your password must be at least 8 characters";
    let passwordErrorText2 = "Your password must contain at least one uppercase letter";
    let passwordErrorText3 = "Your passwords do not match";
    function hasUpperCase(str) {
        return /[A-Z]/.test(str);
    }
    if (password && password.value.length < 8) {
        password.classList.add('error');
        if (passwordError) {
            passwordError.style.display = 'block';
            passwordError.innerText = passwordErrorText;
        }
        return;
    }
    if (password && !hasUpperCase(password.value)) {
        password.classList.add("error");
        if (passwordError) {
            passwordError.style.display = "block";
            passwordError.textContent = passwordErrorText2;
        }
        return;
    }
    else if (password && confirmPassword && (!password.value || !confirmPassword.value || password.value !== confirmPassword.value)) {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        if (passwordError) {
            passwordError.style.display = "block";
            passwordError.textContent = passwordErrorText3;
        }
        return;
    }
    else {
        password === null || password === void 0 ? void 0 : password.classList.remove('error');
        confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.classList.remove('error');
    }
    password === null || password === void 0 ? void 0 : password.classList.remove("error");
    confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.classList.remove("error");
    if (passwordError) {
        passwordError.style.display = "none";
    }
}
