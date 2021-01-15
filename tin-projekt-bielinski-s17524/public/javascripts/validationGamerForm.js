function validateForm() {
    const nickInput = document.getElementById('nick');
    const emailInput = document.getElementById('email');
    const bioInput = document.getElementById('bio');

    const errorNick = document.getElementById('errorNick');
    const errorEmail = document.getElementById('errorEmail');
    const errorBio = document.getElementById('errorBio');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([nickInput, emailInput, bioInput], [errorNick, errorEmail, errorBio], errorsSummary);

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

    if (!checkTextLengthRange(bioInput.value, 0, 1000)) {
        valid = false;
        bioInput.classList.add("error-input");
        errorBio.innerText = "Pole powinno zawierać max 1000 znaków";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}