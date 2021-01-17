const gameRepository = require('../repository/sequelize/gameRepository');
const publisherRepository = require('../repository/sequelize/publisherRepository');

exports.showGameList = (req, res, next) => {
    gameRepository.getGames()
        .then(games => {
            for (let game of games) {
                var total = 0;
                for (var i = 0; i < game.rates.length; i++) {
                    total += game.rates[i].rate;
                }
                game.averageRate = (Math.round(total / game.rates.length * 1000) / 1000).toFixed(3);
            };
            res.render('pages/game/list', {
                games: games,
                navLocation: 'games',
                message: ''
            });
        });
}

exports.showAddGameForm = (req, res, next) => {
    let allPublishers;
    publisherRepository.getPublishers()
        .then(publishers => {
            res.render('pages/game/form', {
                game: {},
                allPublishers: publishers,
                formMode: 'create',
                pageTitle: 'Nowa gra',
                btnLabel: 'Dodaj grę',
                formAction: '/game/add',
                navLocation: 'gameForm',
                validationErrors: []
            });
        });
}

exports.showGameDetails = (req, res, next) => {
    const gameId = req.params.gameId;
    let allPublishers;
    publisherRepository.getPublishers()
        .then(publishers => {
            allPublishers = publishers;
            return gameRepository.getGameById(gameId)
        })
        .then(game => {
            res.render('pages/game/form', {
                game: game,
                allPublishers: allPublishers,
                formMode: 'details',
                pageTitle: 'Szczegóły gry',
                btnLabel: '',
                formAction: '',
                navLocation: '',
                validationErrors: []
            });
        });
}

exports.showEditGameForm = (req, res, next) => {
    const gameId = req.params.gameId;
    let allPublishers;
    publisherRepository.getPublishers()
        .then(publishers => {
            allPublishers = publishers;
            return gameRepository.getGameById(gameId)
        })
        .then(game => {
            res.render('pages/game/form', {
                game: game,
                allPublishers: allPublishers,
                formMode: 'edit',
                pageTitle: 'Edycja gry',
                btnLabel: 'Zapisz zmiany',
                formAction: '/game/edit/',
                navLocation: 'gameForm',
                validationErrors: []
            });
        });
}

exports.addGame = (req, res, next) => {
    const gameData = { ...req.body };
    publisherRepository.getPublishers()
        .then(publishers => {
            allPublishers = publishers;
            return gameRepository.createGame(gameData)
        })
        .then(result => {
            res.redirect('/game');
        })
        .catch(err => {
            err.errors.forEach(e => {
                if (e.path.includes('gameName') && e.type == 'unique violation') {
                    e.message = "Podana nazwa gry jest już używana";
                }
            });
            res.render('pages/game/form', {
                game: gameData,
                allPublishers: allPublishers,
                formMode: 'create',
                pageTitle: 'Nowa gra',
                btnLabel: 'Dodaj grę',
                formAction: '/game/add',
                navLocation: 'gameForm',
                validationErrors: err.errors
            });
        });
};

exports.updateGame = (req, res, next) => {
    const gameId = req.body._id;
    const gameData = { ...req.body };
    publisherRepository.getPublishers()
        .then(publishers => {
            allPublishers = publishers;
            return gameRepository.updateGame(gameId, gameData)
        })
        .then(result => {
            res.redirect('/game');
        })
        .catch(err => {
            err.errors.forEach(e => {
                if (e.path.includes('gameName') && e.type == 'unique violation') {
                    e.message = "Podana nazwa gry jest już używana";
                }
            });
            res.render('pages/game/form', {
                game: gameData,
                formMode: 'edit',
                pageTitle: 'Edycja gry',
                btnLabel: 'Zapisz zmiany',
                formAction: '/game/edit/',
                navLocation: 'gameForm',
                validationErrors: err.errors
            });
        });
};

exports.deleteGame = (req, res, next) => {
    const gameId = req.params.gameId;
    gameRepository.deleteGame(gameId)
        .then(() => {
            res.redirect('/game');
        });
};
