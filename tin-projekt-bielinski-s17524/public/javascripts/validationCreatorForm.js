function validateForm() {
    const nameInput = document.getElementById('name');
    const nickInput = document.getElementById('nick');
    const emailInput = document.getElementById('email');
    const headquartersInput = document.getElementById('headquarters');

    const errorName = document.getElementById('errorName');
    const errorNick = document.getElementById('errorNick');
    const errorEmail = document.getElementById('errorEmail');
    const errorHeadquarters = document.getElementById('errorHeadquarters');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([nameInput, nickInput, emailInput, headquartersInput], [errorName, errorNick, errorEmail, errorHeadquarters], errorsSummary);

    let valid = true;

    if (!checkRequired(nameInput.value)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(nameInput.value, 2, 60)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

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

    if (!checkTextLengthRange(headquartersInput.value, 0, 200)) {
        valid = false;
        headquartersInput.classList.add("error-input");
        errorHeadquarters.innerText = "Pole powinno zawierać max 200 znaków";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}