function validateForm() {
    const scoreInput = document.getElementById('score');
    const commentInput = document.getElementById('comment');

    const errorScore = document.getElementById('errorScore');
    const errorComment = document.getElementById('errorComment');

    resetErrors([scoreInput, commentInput], [errorScore, errorComment], errorsSummary);

    let valid = true;

    if (!checkRequired(scoreInput.value)) {
        valid = false;
        scoreInput.classList.add("error-input");
        errorScore.innerText = "Pole jest wymagane";
    } else if (!checkNumber(scoreInput.value)) {
        valid = false;
        scoreInput.classList.add("error-input");
        errorScore.innerText = "Pole powinno być liczbą";
    } else if (!checkNumberRange(scoreInput.value, 1, 10)) {
        valid = false;
        scoreInput.classList.add("error-input");
        errorScore.innerText = "Pole powinno być liczbą naturalną w zakresie od 1 do 10";
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