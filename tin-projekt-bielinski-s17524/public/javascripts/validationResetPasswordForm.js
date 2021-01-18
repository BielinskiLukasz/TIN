function validateForm() {
    const nickInput = document.getElementById('nick');
    const passwordInput = document.getElementById('password');
    const emailInput = document.getElementById('email');

    const errorNick = document.getElementById('errorNick');
    const errorPassword = document.getElementById('errorPassword');
    const errorEmail = document.getElementById('errorEmail');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([nickInput, passwordInput, emailInput], [errorNick, errorPassword, errorEmail], errorsSummary);

    let valid = true;

    if (!checkRequired(nickInput.value)) {
        valid = false;
        nickInput.classList.add("error-input");
        errorNick.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(nickInput.value, 2, 60)) {
        valid = false;
        nickInput.classList.add("error-input");
        errorNick.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    if (!checkRequired(passwordInput.value)) {
        valid = false;
        passwordInput.classList.add("error-input");
        errorPassword.innerText = "Hasło jest wymagane";
    } else if (!checkTextLengthRange(passwordInput.value, 8, 100)) {
        valid = false;
        passwordInput.classList.add("error-input");
        errorPassword.innerText = "Hasło powinno zawierać min 8 znaków";
    }

    if (!checkRequired(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(emailInput.value, 5, 60)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierać od 5 do 60 znaków";
    } else if (!checkEmail(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierać prawidłowy adres email";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}