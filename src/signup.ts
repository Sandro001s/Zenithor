const inputs = document.querySelectorAll<HTMLInputElement>('.input');
const submit = document.querySelector<HTMLButtonElement>('.submit');
const email = document.querySelector<HTMLInputElement>('.email');
const password = document.querySelector<HTMLInputElement>('.password');
const confirmPassword = document.querySelector<HTMLInputElement>('.confirm-password');
const passwordError = document.getElementById('8characterError');



function errorcheck(): void{
    submit?.addEventListener("click", (event) => {
        event.preventDefault(); 
    
        let hasError = false; 
    
        inputs.forEach((input) => {
            if (input.value === "") {
                input.classList.add("error");
                hasError = true;
            } else {
                input.classList.remove("error");
            }
        });
    
        if (email && !email.value.includes("@")) {
            email.classList.add("error");
            hasError = true;
        } else {
            email?.classList.remove("error");
        }
    
        passwordCheck();
    
        if (!hasError && password?.classList.contains("error") === false) {
            (submit.closest("form") as HTMLFormElement)?.submit();
        }
    });
    
}

errorcheck();



function passwordCheck(): void{
    let passwordErrorText: string = "Your password must be at least 8 characters";
    let passwordErrorText2: string = "Your password must contain at least one uppercase letter";
    let passwordErrorText3: string = "Your passwords do not match";

    function hasUpperCase(str: string): boolean {
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
        password?.classList.remove('error');
        confirmPassword?.classList.remove('error');
    }
    
    password?.classList.remove("error");
    confirmPassword?.classList.remove("error");
    if (passwordError) {
        passwordError.style.display = "none";
    }
}

