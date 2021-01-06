function validateForm() {
    const gameNameInput = document.getElementById('gameName');
    const yearReleasedInput = document.getElementById('yearReleased');
    const gameCategoryInput = document.getElementById('gameCategory');
    const minAgeInput = document.getElementById('minAge');
    const minPlayersNumInput = document.getElementById('minPlayersNum');
    const maxPlayersNumInput = document.getElementById('maxPlayersNum');
    const minPlayingTimeInput = document.getElementById('minPlayingTime');
    const maxPlayingTimeInput = document.getElementById('maxPlayingTime');
    const gameMechanismInput = document.getElementById('gameMechanism');
    const gamePublisherInput = document.getElementById('gamePublisher');
    const gameDesignerInput = document.getElementById('gameDesigner');
    const gameArtistInput = document.getElementById('gameArtist');

    const errorGameName = document.getElementById('errorGameName');
    const errorYearReleased = document.getElementById('errorYearReleased');
    const errorGameCategory = document.getElementById('errorGameCategory');
    const errorMinAge = document.getElementById('errorMinAge');
    const errorMinPlayersNum = document.getElementById('errorMinPlayersNum');
    const errorMaxPlayersNum = document.getElementById('errorMaxPlayersNum');
    const errorMinPlayingTime = document.getElementById('errorMinPlayingTime');
    const errorMaxPlayingTime = document.getElementById('errorMaxPlayingTime');
    const errorGameMechanism = document.getElementById('errorGameMechanism');
    const errorGamePublisher = document.getElementById('errorGamePublisher');
    const errorGameDesigner = document.getElementById('errorGameDesigner');
    const errorGameArtist = document.getElementById('errorGameArtist');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors(
        [gameNameInput, yearReleasedInput, gameCategoryInput, minAgeInput, minPlayersNumInput, maxPlayersNumInput,
            minPlayingTimeInput, maxPlayingTimeInput, gameMechanismInput, gamePublisherInput, gameDesignerInput, gameArtistInput],
        [errorGameName, errorYearReleased, errorGameCategory, errorMinAge, errorMinPlayersNum, errorMaxPlayersNum,
            errorMinPlayingTime, errorMaxPlayingTime, errorGameMechanism, errorGamePublisher, errorGameDesigner, errorGameArtist],
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
    } else if (!checkNumber(yearReleasedInput.value)) {
        valid = false;
        yearReleasedInput.classList.add("error-input");
        errorYearReleased.innerText = "Pole powinno być liczbą";
    }

    if (!checkRequired(gameCategoryInput.value)) {
        valid = false;
        gameCategoryInput.classList.add("error-input");
        errorGameCategory.innerText = "Pole jest wymagane";
    }

    if (!checkRequired(minAgeInput.value)) {
        valid = false;
        minAgeInput.classList.add("error-input");
        errorMinAge.innerText = "Pole jest wymagane";
    } else if (!checkNumber(minAgeInput.value)) {
        valid = false;
        minAgeInput.classList.add("error-input");
        errorMinAge.innerText = "Pole powinno być liczbą";
    } else if (!checkNumberRange(minAgeInput.value, 0, 24)) {
        valid = false;
        minAgeInput.classList.add("error-input");
        errorMinAge.innerText = "Pole powinno być liczbą w zakresie od 0 do 24";
    }

    if (!checkRequired(minPlayersNumInput.value)) {
        valid = false;
        minPlayersNumInput.classList.add("error-input");
        errorMinPlayersNum.innerText = "Pole jest wymagane";
    } else if (!checkNumber(minPlayersNumInput.value)) {
        valid = false;
        minPlayersNumInput.classList.add("error-input");
        errorMinPlayersNum.innerText = "Pole powinno być liczbą";
    } else if (!checkNumberRange(minPlayersNumInput.value, 0, 999_999_999)) {
        valid = false;
        minPlayersNumInput.classList.add("error-input");
        errorMinPlayersNum.innerText = "Pole powinno być liczbą większą od 0";
    }

    if (!checkRequired(maxPlayersNumInput.value)) {
        valid = false;
        maxPlayersNumInput.classList.add("error-input");
        errorMaxPlayersNum.innerText = "Pole jest wymagane";
    } else if (!checkNumber(maxPlayersNumInput.value)) {
        valid = false;
        maxPlayersNumInput.classList.add("error-input");
        errorMaxPlayersNum.innerText = "Pole powinno być liczbą";
    } else if (!checkNumberRange(maxPlayersNumInput.value, minPlayersNumInput.value, 999_999_999)) {
        valid = false;
        maxPlayersNumInput.classList.add("error-input");
        errorMaxPlayersNum.innerText = "Pole powinno być liczbą większą od minimalnej liczby graczy";
    }

    if (!checkRequired(minPlayingTimeInput.value)) {
        valid = false;
        minPlayingTimeInput.classList.add("error-input");
        errorMinPlayingTime.innerText = "Pole jest wymagane";
    } else if (!checkNumber(minPlayingTimeInput.value)) {
        valid = false;
        minPlayingTimeInput.classList.add("error-input");
        errorMinPlayingTime.innerText = "Pole powinno być liczbą";
    } else if (!checkNumberRange(minPlayingTimeInput.value, 0, 999_999_999)) {
        valid = false;
        minPlayingTimeInput.classList.add("error-input");
        errorMinPlayingTime.innerText = "Pole powinno być liczbą większą od 0";
    }

    if (!checkRequired(maxPlayingTimeInput.value)) {
        valid = false;
        maxPlayingTimeInput.classList.add("error-input");
        errorMaxPlayingTime.innerText = "Pole jest wymagane";
    } else if (!checkNumber(maxPlayingTimeInput.value)) {
        valid = false;
        maxPlayingTimeInput.classList.add("error-input");
        errorMaxPlayingTime.innerText = "Pole powinno być liczbą";
    } else if (!checkNumberRange(maxPlayingTimeInput.value, minPlayingTimeInput.value, 999_999_999)) {
        valid = false;
        maxPlayingTimeInput.classList.add("error-input");
        errorMaxPlayingTime.innerText = "Pole powinno być liczbą większą od minimalnej liczby minut";
    }

    // if (!checkRequired(gameMechanismInput.value)) {
    //     valid = false;
    //     gameMechanismInput.classList.add("error-input");
    //     errorGamePublisher.innerText = "Pole jest wymagane";
    // } else if (!checkTextLengthRange(gameMechanismInput.value, 2, 200)) {
    //     valid = false;
    //     gameMechanismInput.classList.add("error-input");
    //     errorGamePublisher.innerText = "Pole powinno zawierać od 2 do 200 znaków";
    // }

    if (!checkRequired(gamePublisherInput.value)) {
        valid = false;
        gamePublisherInput.classList.add("error-input");
        errorGameDesigner.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(gamePublisherInput.value, 2, 200)) {
        valid = false;
        gamePublisherInput.classList.add("error-input");
        errorGameDesigner.innerText = "Pole powinno zawierać od 2 do 200 znaków";
    }

    // if (!checkRequired(gameDesignerInput.value)) {
    //     valid = false;
    //     gameDesignerInput.classList.add("error-input");
    //     errorGameArtist.innerText = "Pole jest wymagane";
    // } else if (!checkTextLengthRange(gameDesignerInput.value, 2, 200)) {
    //     valid = false;
    //     gameDesignerInput.classList.add("error-input");
    //     errorGameArtist.innerText = "Pole powinno zawierać od 2 do 200 znaków";
    // }

    // if (!checkRequired(gameArtistInput.value)) {
    //     valid = false;
    //     gameArtistInput.classList.add("error-input");
    //     errorsSummary.innerText = "Pole jest wymagane";
    // } else if (!checkTextLengthRange(gameArtistInput.value, 2, 200)) {
    //     valid = false;
    //     gameArtistInput.classList.add("error-input");
    //     errorsSummary.innerText = "Pole powinno zawierać od 2 do 200 znaków";
    // }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}