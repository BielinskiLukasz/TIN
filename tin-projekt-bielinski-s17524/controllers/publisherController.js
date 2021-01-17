const publisherRepository = require('../repository/sequelize/publisherRepository');

exports.showPublisherList = (req, res, next) => {
    publisherRepository.getPublishers()
        .then(publishers => {
            res.render('pages/publisher/list', {
                publishers: publishers,
                navLocation: 'publishers',
                message: req.param("m")
            });
        });
}

exports.showAddPublisherForm = (req, res, next) => {
    res.render('pages/publisher/form', {
        publisher: {},
        formMode: 'create',
        pageTitle: 'Nowy wydawca',
        btnLabel: 'Dodaj wydawcę',
        formAction: '/publisher/add',
        navLocation: 'publisherForm',
        validationErrors: []
    });
}

exports.showPublisherDetails = (req, res, next) => {
    const publisherId = req.params.publisherId;
    publisherRepository.getPublisherById(publisherId)
        .then(publisher => {
            for (let game of publisher.games) {
                if (game.rates.length == 0) {
                    game.averageRate = 0;
                } else {
                    var total = 0;
                    for (var i = 0; i < game.rates.length; i++) {
                        total += game.rates[i].rate;
                    }
                    game.averageRate = (Math.round(total / game.rates.length * 1000) / 1000).toFixed(3);
                }
            };
            res.render('pages/publisher/form', {
                publisher: publisher,
                formMode: 'details',
                pageTitle: 'Szczegóły wydawcy',
                btnLabel: '',
                formAction: '',
                navLocation: '',
                validationErrors: []
            });
        });
}

exports.showEditPublisherForm = (req, res, next) => {
    const publisherId = req.params.publisherId;
    publisherRepository.getPublisherById(publisherId)
        .then(publisher => {
            res.render('pages/publisher/form', {
                publisher: publisher,
                formMode: 'edit',
                pageTitle: 'Edycja wydawcy',
                btnLabel: 'Zapisz zmiany',
                formAction: '/publisher/edit/',
                navLocation: 'publisherForm',
                validationErrors: []
            });
        });
}

exports.addPublisher = (req, res, next) => {
    const publisherData = { ...req.body };
    publisherRepository.createPublisher(publisherData)
        .then(result => {
            res.redirect('/publisher?m=' + encodeURIComponent('Dodano nowe wydawnictwo'));
        })
        .catch(err => {
            err.errors.forEach(e => {
                if (e.path.includes('email') && e.type == 'unique violation') {
                    e.message = "Podany adres email jest już używany";
                } else if (e.path.includes('nick') && e.type == 'unique violation') {
                    e.message = "Podany nick jest już używany";
                }
            });
            res.render('pages/publisher/form', {
                publisher: publisherData,
                formMode: 'create',
                pageTitle: 'Nowy wydawca',
                btnLabel: 'Dodaj wydawcę',
                formAction: '/publisher/add',
                navLocation: 'publisherForm',
                validationErrors: err.errors
            });
        });
};

exports.updatePublisher = (req, res, next) => {
    const publisherId = req.body._id;
    const publisherData = { ...req.body };
    publisherRepository.updatePublisher(publisherId, publisherData)
        .then(result => {
            res.redirect('/publisher?m=' + encodeURIComponent('Zaktualizowano dane o wydawnictwio'));
        })
        .catch(err => {
            err.errors.forEach(e => {
                if (e.path.includes('email') && e.type == 'unique violation') {
                    e.message = "Podany adres email jest już używany";
                } else if (e.path.includes('nick') && e.type == 'unique violation') {
                    e.message = "Podany nick jest już używany";
                }
            });
            publisherRepository.getPublisherById(publisherId)
                .then(publisher => {
                    publisherData.games = publisher.games
                    res.render('pages/publisher/form', {
                        publisher: publisherData,
                        formMode: 'edit',
                        pageTitle: 'Edycja wydawcy',
                        btnLabel: 'Zapisz zmiany',
                        formAction: '/publisher/edit/',
                        navLocation: 'publisherForm',
                        validationErrors: err.errors
                    });
                });
        });
};

exports.deletePublisher = (req, res, next) => {
    const publisherId = req.params.publisherId;
    publisherRepository.deletePublisher(publisherId)
        .then(() => {
            res.redirect('/publisher?m=' + encodeURIComponent('Usunięto wydawnictwo'));
        });
};
