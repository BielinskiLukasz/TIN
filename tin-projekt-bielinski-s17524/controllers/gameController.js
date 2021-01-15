const gameRepository = require('../repository/sequelize/gameRepository');

exports.showGameList = (req, res, next) => {
    gameRepository.getGames()
        .then(games => {
            res.render('pages/game/list', {
                games: games,
                navLocation: 'games'
            });
        });
}

exports.showAddGameForm = (req, res, next) => {
    res.render('pages/game/form', {
        game: {},
        formMode: 'create',
        pageTitle: 'Nowa gra',
        btnLabel: 'Dodaj grę',
        formAction: '/game/add',
        navLocation: 'gameForm'
    });
}

exports.showGameDetails = (req, res, next) => {
    const gameId = req.params.gameId;
    gameRepository.getGameById(gameId)
        .then(game => {
            res.render('pages/game/form', {
                game: game,
                formMode: 'details',
                pageTitle: 'Szczegóły gry',
                btnLabel: '',
                formAction: '',
                navLocation: ''
            });
        });
}

exports.showEditGameForm = (req, res, next) => {
    const gameId = req.params.gameId;
    gameRepository.getGameById(gameId)
        .then(game => {
            res.render('pages/game/form', {
                game: game,
                formMode: 'edit',
                pageTitle: 'Edycja gry',
                btnLabel: 'Zapisz zmiany',
                formAction: '/game/edit/',
                navLocation: 'gameForm'
            });
        });
}

exports.addGame = (req, res, next) => {
    const gameData = { ...req.body };
    gameRepository.createGame(gameData)
        .then(result => {
            res.redirect('/game');
        });
};

exports.updateGame = (req, res, next) => {
    const gameId = req.body._id;
    const gameData = { ...req.body };
    gameRepository.updateGame(gameId, gameData)
        .then(result => {
            res.redirect('/game');
        });
};

exports.deleteGame = (req, res, next) => {
    const gameId = req.params.gameId;
    gameRepository.deleteGame(gameId)
        .then(() => {
            res.redirect('/game');
        });
};
