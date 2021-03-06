function validateForm() {
    const gameNameInput = document.getElementById('gameName');
    const yearReleasedInput = document.getElementById('yearReleased');
    const publisherInput = document.getElementById('publisher');
    const minAgeInput = document.getElementById('minAge');
    const minPlayersNumInput = document.getElementById('minPlayersNum');
    const maxPlayersNumInput = document.getElementById('maxPlayersNum');
    const minPlayingTimeInput = document.getElementById('minPlayingTime');
    const maxPlayingTimeInput = document.getElementById('maxPlayingTime');

    const errorGameName = document.getElementById('errorGameName');
    const errorYearReleased = document.getElementById('errorYearReleased');
    const errorPublisher = document.getElementById('errorPublisher');
    const errorMinAge = document.getElementById('errorMinAge');
    const errorMinPlayersNum = document.getElementById('errorMinPlayersNum');
    const errorMaxPlayersNum = document.getElementById('errorMaxPlayersNum');
    const errorMinPlayingTime = document.getElementById('errorMinPlayingTime');
    const errorMaxPlayingTime = document.getElementById('errorMaxPlayingTime');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors(
        [gameNameInput, yearReleasedInput, publisherInput, minAgeInput, minPlayersNumInput, maxPlayersNumInput, minPlayingTimeInput, maxPlayingTimeInput],
        [errorGameName, errorYearReleased, errorPublisher, errorMinAge, errorMinPlayersNum, errorMaxPlayersNum, errorMinPlayingTime, errorMaxPlayingTime],
        errorsSummary);

    let valid = true;

    if (!checkRequired(gameNameInput.value)) {
        valid = false;
        gameNameInput.classList.add("error-input");
        errorGameName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(gameNameInput.value, 2, 200)) {
        valid = false;
        gameNameInput.classList.add("error-input");
        errorGameName.innerText = "Pole powinno zawierać od 2 do 200 znaków";
    }

    if (!checkRequired(yearReleasedInput.value)) {
        valid = false;
        yearReleasedInput.classList.add("error-input");
        errorYearReleased.innerText = "Pole jest wymagane";
    } else if (!checkInteger(yearReleasedInput.value)) {
        valid = false;
        yearReleasedInput.classList.add("error-input");
        errorYearReleased.innerText = "Pole powinno być liczbą naturalną";
    }

    if (!checkRequired(publisherInput.value)) {
        valid = false;
        publisherInput.classList.add("error-input");
        errorPublisher.innerText = "Pole jest wymagane";
    }

    if (!checkRequired(minAgeInput.value)) {
        valid = false;
        minAgeInput.classList.add("error-input");
        errorMinAge.innerText = "Pole jest wymagane";
    } else if (!checkInteger(minAgeInput.value)) {
        valid = false;
        minAgeInput.classList.add("error-input");
        errorMinAge.innerText = "Pole powinno być liczbą naturalną";
    } else if (!checkNumberRange(minAgeInput.value, 0, 24)) {
        valid = false;
        minAgeInput.classList.add("error-input");
        errorMinAge.innerText = "Pole powinno być liczbą naturalną w zakresie od 0 do 24";
    }

    if (!checkRequired(minPlayersNumInput.value)) {
        valid = false;
        minPlayersNumInput.classList.add("error-input");
        errorMinPlayersNum.innerText = "Pole jest wymagane";
    } else if (!checkInteger(minPlayersNumInput.value)) {
        valid = false;
        minPlayersNumInput.classList.add("error-input");
        errorMinPlayersNum.innerText = "Pole powinno być liczbą naturalną";
    } else if (!checkNumberRange(minPlayersNumInput.value, 0, 999_999_999)) {
        valid = false;
        minPlayersNumInput.classList.add("error-input");
        errorMinPlayersNum.innerText = "Pole powinno być liczbą nie mniejszą od 0";
    }

    if (!checkRequired(maxPlayersNumInput.value)) {
        valid = false;
        maxPlayersNumInput.classList.add("error-input");
        errorMaxPlayersNum.innerText = "Pole jest wymagane";
    } else if (!checkInteger(maxPlayersNumInput.value)) {
        valid = false;
        maxPlayersNumInput.classList.add("error-input");
        errorMaxPlayersNum.innerText = "Pole powinno być liczbą naturalną";
    } else if (!checkNumberRange(maxPlayersNumInput.value, minPlayersNumInput.value, 999_999_999)) {
        valid = false;
        maxPlayersNumInput.classList.add("error-input");
        errorMaxPlayersNum.innerText = "Pole powinno być liczbą nie mniejszą od minimalnej liczby graczy";
    }

    if (!checkRequired(minPlayingTimeInput.value)) {
        valid = false;
        minPlayingTimeInput.classList.add("error-input");
        errorMinPlayingTime.innerText = "Pole jest wymagane";
    } else if (!checkInteger(minPlayingTimeInput.value)) {
        valid = false;
        minPlayingTimeInput.classList.add("error-input");
        errorMinPlayingTime.innerText = "Pole powinno być liczbą naturalną";
    } else if (!checkNumberRange(minPlayingTimeInput.value, 0, 999_999_999)) {
        valid = false;
        minPlayingTimeInput.classList.add("error-input");
        errorMinPlayingTime.innerText = "Pole powinno być liczbą nie mniejszą od 0";
    }

    if (!checkRequired(maxPlayingTimeInput.value)) {
        valid = false;
        maxPlayingTimeInput.classList.add("error-input");
        errorMaxPlayingTime.innerText = "Pole jest wymagane";
    } else if (!checkInteger(maxPlayingTimeInput.value)) {
        valid = false;
        maxPlayingTimeInput.classList.add("error-input");
        errorMaxPlayingTime.innerText = "Pole powinno być liczbą naturalną";
    } else if (!checkNumberRange(maxPlayingTimeInput.value, minPlayingTimeInput.value, 999_999_999)) {
        valid = false;
        maxPlayingTimeInput.classList.add("error-input");
        errorMaxPlayingTime.innerText = "Pole powinno być liczbą nie mniejszą od minimalnej liczby minut";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}