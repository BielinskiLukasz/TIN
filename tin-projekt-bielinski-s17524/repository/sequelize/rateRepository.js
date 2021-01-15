const Rate = require("../../model/sequelize/rate");
const Game = require("../../model/sequelize/game");
const Gamer = require("../../model/sequelize/gamer");

exports.getRates = () => {
    return Rate.findAll({
        include: [{
            model: Game,
            as: 'game'
        },
        {
            model: Gamer,
            as: 'gamer'
        }]
    });
};

exports.getRateById = (rateId) => {
    return Rate.findByPk(rateId,
        {
            include: [{
                model: Game,
                as: 'game'
            },
            {
                model: Gamer,
                as: 'gamer'
            }]
        });
};

exports.createRate = (data) => {
    return Rate.create({
        nick: data.nick,
        name: data.name,
        email: data.email,
        headquarters: data.headquarters
    });
};

exports.updateRate = (rateId, data) => {
    return Rate.update(data, { where: { _id: rateId } });
};

exports.deleteRate = (rateId) => {
    return Rate.destroy({
        where: { _id: rateId }
    });

}; 