exports.showGameList = (req, res, next) => {
    res.render('pages/game/list', {});
}

exports.showAddGameForm = (req, res, next) => {
    res.render('pages/game/form', {});
}

exports.showGameDetails = (req, res, next) => {
    res.render('pages/game/details', {});
}