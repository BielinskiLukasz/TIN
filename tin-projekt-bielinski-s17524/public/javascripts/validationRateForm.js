function validateForm() {
    const rateInput = document.getElementById('rate');
    const commentInput = document.getElementById('comment');

    const errorRate = document.getElementById('errorRate');
    const errorComment = document.getElementById('errorComment');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([rateInput, commentInput], [errorRate, errorComment], errorsSummary);

    let valid = true;

    if (!checkRequired(rateInput.value)) {
        valid = false;
        rateInput.classList.add("error-input");
        errorRate.innerText = "Pole jest wymagane";
    } else if (!checkInteger(rateInput.value)) {
        valid = false;
        rateInput.classList.add("error-input");
        errorRate.innerText = "Pole powinno być liczbą naturalną";
    } else if (!checkNumberRange(rateInput.value, 1, 10)) {
        valid = false;
        rateInput.classList.add("error-input");
        errorRate.innerText = "Pole powinno być liczbą naturalną w zakresie od 1 do 10";
    }

    if (!checkTextLengthRange(commentInput.value, 0, 500)) {
        valid = false;
        commentInput.classList.add("error-input");
        errorComment.innerText = "Pole powinno zawierać max 500 znaków";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}