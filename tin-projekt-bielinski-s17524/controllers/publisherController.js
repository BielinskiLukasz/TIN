const publisherRepository = require('../repository/sequelize/publisherRepository');

exports.showPublisherList = (req, res, next) => {
    publisherRepository.getPublishers()
        .then(publishers => {
            res.render('pages/publisher/list', {
                publishers: publishers,
                navLocation: 'publishers'
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
        navLocation: 'publisherForm'
    });
}

exports.showPublisherDetails = (req, res, next) => {
    const publisherId = req.params.publisherId;
    publisherRepository.getPublisherById(publisherId)
        .then(publisher => {
            res.render('pages/publisher/form', {
                publisher: publisher,
                formMode: 'details',
                pageTitle: 'Szczegóły wydawcy',
                btnLabel: '',
                formAction: '',
                navLocation: ''
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
                navLocation: 'publisherForm'
            });
        });
}

exports.addPublisher = (req, res, next) => {
    const publisherData = { ...req.body };
    publisherRepository.createPublisher(publisherData)
        .then(result => {
            res.redirect('/publisher');
        });
};

exports.updatePublisher = (req, res, next) => {
    const publisherId = req.body._id;
    const publisherData = { ...req.body };
    publisherRepository.updatePublisher(publisherId, publisherData)
        .then(result => {
            res.redirect('/publisher');
        });
};

exports.deletePublisher = (req, res, next) => {
    const publisherId = req.params.publisherId;
    publisherRepository.deletePublisher(publisherId)
        .then(() => {
            res.redirect('/publisher');
        });
};
