exports.showGameList = (req, res, next) => {
    res.render('pages/game/list', { navLocation: 'games' });
}

exports.showAddGameForm = (req, res, next) => {
    res.render('pages/game/form', { navLocation: 'gameForm' });
}

exports.showGameDetails = (req, res, next) => {
    res.render('pages/game/details', { navLocation: '' });
}

exports.showEditGameForm = (req, res, next) => {
    res.render('pages/game/edit', { navLocation: '' });
}

exports.showRateGameForm = (req, res, next) => {
    res.render('pages/game/rate', { navLocation: 'rateForm' });
}

exports.showGameRatingList = (req, res, next) => {
    res.render('pages/game/ratings', { navLocation: '' });
}
