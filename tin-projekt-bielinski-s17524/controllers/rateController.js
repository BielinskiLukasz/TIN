const rateRepository = require('../repository/sequelize/rateRepository');
const gameRepository = require('../repository/sequelize/gameRepository');

exports.showRateList = (req, res, next) => {
    rateRepository.getRates()
        .then(rates => {
            res.render('pages/rate/list', {
                rates: rates,
                navLocation: 'rates'
            });
        });
}

exports.showLoggedUserRateList = (req, res, next) => {
    rateRepository.getRates()
        .then(rates => {
            res.render('pages/profile/rates', {
                rates: rates,
                navLocation: 'my-scores'
            });
        });
}

exports.showAddRateForm = (req, res, next) => {
    const gameId = req.param("gameId")
    gameRepository.getGameById(gameId)
        .then(game => {
            res.render('pages/rate/form', {
                rate: {
                    game_id: gameId,
                    game: game
                },
                formMode: 'create',
                pageTitle: 'Oceń grę',
                btnLabel: 'Oceń grę',
                formAction: '/rate/add',
                navLocation: 'rateForm',
                validationErrors: []
            });
        });
}

exports.showRateDetails = (req, res, next) => {
    const rateId = req.params.rateId;
    rateRepository.getRateById(rateId)
        .then(rate => {
            res.render('pages/rate/form', {
                rate: rate,
                formMode: 'details',
                pageTitle: 'Szczegóły oceny',
                btnLabel: '',
                formAction: '',
                navLocation: '',
                validationErrors: []
            });
        });
}

exports.showEditRateForm = (req, res, next) => {
    const rateId = req.params.rateId;
    rateRepository.getRateById(rateId)
        .then(rate => {
            res.render('pages/rate/form', {
                rate: rate,
                formMode: 'edit',
                pageTitle: 'Edycja oceny',
                btnLabel: 'Zapisz zmiany',
                formAction: '/rate/edit/',
                navLocation: 'rateForm',
                validationErrors: []
            });
        });
}

exports.addRate = (req, res, next) => {
    const rateData = { ...req.body };
    rateRepository.getRateByIds(rateData.game_id, rateData.gamer_id)
        .then(rate => {
            if (rate == undefined) {
                rateRepository.createRate(rateData)
                    .then(result => {
                        res.redirect('/rate');
                    })
                    .catch(err => {
                        res.render('pages/rate/form', {
                            rate: rateData,
                            formMode: 'create',
                            pageTitle: 'Oceń grę',
                            btnLabel: 'Oceń grę',
                            formAction: '/rate/add',
                            navLocation: 'rateForm',
                            validationErrors: err.errors
                        });
                    });
            } else {
                res.redirect('/rate/edit/' + rate._id);
            }
        });
};

exports.updateRate = (req, res, next) => {
    const rateId = req.body._id;
    const rateData = { ...req.body };
    rateRepository.updateRate(rateId, rateData)
        .then(result => {
            res.redirect('/rate');
        })
        .catch(err => {
            rateRepository.getRateById(rateId)
                .then(rate => {
                    rateData.game = rate.game;
                    rateData.gamer = rate.gamer;
                    res.render('pages/rate/form', {
                        rate: rateData,
                        formMode: 'edit',
                        pageTitle: 'Edycja oceny',
                        btnLabel: 'Zapisz zmiany',
                        formAction: '/rate/edit/',
                        navLocation: 'rateForm',
                        validationErrors: err.errors
                    });
                });
        });
};

exports.deleteRate = (req, res, next) => {
    const rateId = req.params.rateId;
    rateRepository.deleteRate(rateId)
        .then(() => {
            res.redirect('/rate');
        });
};
