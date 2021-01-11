const PublisherRepository = require('../repository/sequelize/publisherRepository');

exports.getPublishers = (req, res, next) => {
    PublisherRepository.getPublishers()
        .then(publishers => {
            res.status(200).json(publishers);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getPublisherById = (req, res, next) => {
    const publisherId = req.params.publisherId;
    PublisherRepository.getPublisherById(publisherId)
        .then(publisher => {
            if (!publisher) {
                res.status(404).json({
                    message: 'Publisher with id: ' + publisherId + ' not found'
                })
            } else {
                res.status(200).json(publisher);
            }
        });
};

exports.createPublisher = (req, res, next) => {
    PublisherRepository.createPublisher(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updatePublisher = (req, res, next) => {
    const publisherId = req.params.publisherId;
    PublisherRepository.updatePublisher(publisherId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Publisher updated!', publisher: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deletePublisher = (req, res, next) => {
    const publisherId = req.params.publisherId;
    PublisherRepository.deletePublisher(publisherId)
        .then(result => {
            res.status(200).json({ message: 'Removed Publisher', publisher: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};