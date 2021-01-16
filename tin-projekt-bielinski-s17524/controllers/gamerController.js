const gamerRepository = require('../repository/sequelize/gamerRepository');

exports.showGamerList = (req, res, next) => {
    gamerRepository.getGamers()
        .then(gamers => {
            res.render('pages/gamer/list', {
                gamers: gamers,
                navLocation: 'gamers'
            });
        });
}

exports.showAddGamerForm = (req, res, next) => {
    res.render('pages/gamer/form', {
        gamer: {},
        formMode: 'create',
        pageTitle: 'Nowy gracz',
        btnLabel: 'Dodaj gracza',
        formAction: '/gamer/add',
        navLocation: 'gamerForm',
        validationErrors: []
    });
}

exports.showGamerDetails = (req, res, next) => {
    const gamerId = req.params.gamerId;
    gamerRepository.getGamerById(gamerId)
        .then(gamer => {
            res.render('pages/gamer/form', {
                gamer: gamer,
                formMode: 'details',
                pageTitle: 'Szczegóły gracza',
                btnLabel: '',
                formAction: '',
                navLocation: '',
                validationErrors: []
            });
        });
}

exports.showEditGamerForm = (req, res, next) => {
    const gamerId = req.params.gamerId;
    gamerRepository.getGamerById(gamerId)
        .then(gamer => {
            res.render('pages/gamer/form', {
                gamer: gamer,
                formMode: 'edit',
                pageTitle: 'Edycja gracza',
                btnLabel: 'Zapisz zmiany',
                formAction: '/gamer/edit/',
                navLocation: 'gamerForm',
                validationErrors: []
            });
        });
}

exports.addGamer = (req, res, next) => {
    const gamerData = { ...req.body };
    gamerRepository.createGamer(gamerData)
        .then(result => {
            res.redirect('/gamer');
        })
        .catch(err => {
            res.render('pages/gamer/form', {
                gamer: gamerData,
                formMode: 'create',
                pageTitle: 'Nowy gracz',
                btnLabel: 'Dodaj gracza',
                formAction: '/gamer/add',
                navLocation: 'gamerForm',
                validationErrors: err.errors
            });
        });
};

exports.updateGamer = (req, res, next) => {
    const gamerId = req.body._id;
    const gamerData = { ...req.body };
    gamerRepository.updateGamer(gamerId, gamerData)
        .then(result => {
            res.redirect('/gamer');
        })
        .catch(err => {
            gamerRepository.getGamerById(gamerId)
                .then(gamer => {
                    gamerData.rates = gamer.rates
                    res.render('pages/gamer/form', {
                        gamer: gamerData,
                        formMode: 'edit',
                        pageTitle: 'Edycja gracza',
                        btnLabel: 'Zapisz zmiany',
                        formAction: '/gamer/edit/',
                        navLocation: 'gamerForm',
                        validationErrors: err.errors
                    });
                });
        });
};

exports.deleteGamer = (req, res, next) => {
    const gamerId = req.params.gamerId;
    gamerRepository.deleteGamer(gamerId)
        .then(() => {
            res.redirect('/gamer');
        });
};
