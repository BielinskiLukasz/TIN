const RateRepository = require('../repository/sequelize/rateRepository');

exports.getRates = (req, res, next) => {
    RateRepository.getRates()
        .then(rates => {
            res.status(200).json(rates);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getRateById = (req, res, next) => {
    const rateId = req.params.rateId;
    RateRepository.getRateById(rateId)
        .then(rate => {
            if (!rate) {
                res.status(404).json({
                    message: 'Rate with id: ' + rateId + ' not found'
                })
            } else {
                res.status(200).json(rate);
            }
        });
};

exports.createRate = (req, res, next) => {
    RateRepository.createRate(req.body)
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

exports.updateRate = (req, res, next) => {
    const rateId = req.params.rateId;
    RateRepository.updateRate(rateId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Rate updated!', rate: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteRate = (req, res, next) => {
    const rateId = req.params.rateId;
    RateRepository.deleteRate(rateId)
        .then(result => {
            res.status(200).json({ message: 'Removed Rate', rate: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};