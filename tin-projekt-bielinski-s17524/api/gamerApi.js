const GamerRepository = require('../repository/sequelize/gamerRepository');

exports.getGamers = (req, res, next) => {
    GamerRepository.getGamers()
        .then(gamers => {
            res.status(200).json(gamers);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getGamerById = (req, res, next) => {
    const gamerId = req.params.gamerId;
    GamerRepository.getGamerById(gamerId)
        .then(gamer => {
            if (!gamer) {
                res.status(404).json({
                    message: 'Gamer with id: ' + gamerId + ' not found'
                })
            } else {
                res.status(200).json(gamer);
            }
        });
};

exports.createGamer = (req, res, next) => {
    GamerRepository.createGamer(req.body)
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

exports.updateGamer = (req, res, next) => {
    const gamerId = req.params.gamerId;
    GamerRepository.updateGamer(gamerId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Gamer updated!', gamer: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteGamer = (req, res, next) => {
    const gamerId = req.params.gamerId;
    GamerRepository.deleteGamer(gamerId)
        .then(result => {
            res.status(200).json({ message: 'Removed Gamer', gamer: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};