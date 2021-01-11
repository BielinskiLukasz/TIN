const Sequelize = require('sequelize');

const Game = require("../../model/sequelize/gamer");
const Rate = require("../../model/sequelize/rate");
const Gamer = require("../../model/sequelize/game");

exports.getRates = () => {
    return Rate.findAll({
        include: [
            {
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
    return Rate.findByPk(rateId, {
        include: [
            {
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
    console.log(JSON.stringify(data));

    return Rate.create({
        game_id: data.game_id,
        gamer_id: data.gamer_id,
        rate: data.rate
    });
};

exports.updateRate = (rateId, data) => {
    return Rate.update(data, { where: { _id: rateId } });
}

exports.deleteRate = (rateId) => {
    return Rate.destroy({
        where: { _id: rateId }
    });
}

exports.deleteManyRates = (rateIds) => {
    return Rate.find({ _id: { [Sequelize.Op.in]: rateIds } })
}