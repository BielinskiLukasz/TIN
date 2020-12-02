exports.showGameList = (req, res, next) => {
    res.render('pages/game/list', { navLocation: 'games' });
}

exports.showAddGameForm = (req, res, next) => {
    res.render('pages/game/form', { navLocation: '' });
}

exports.showGameDetails = (req, res, next) => {
    res.render('pages/game/details', { navLocation: '' });
}

exports.showEditGameDetails = (req, res, next) => {
    res.render('pages/game/edit', { navLocation: '' });
}
