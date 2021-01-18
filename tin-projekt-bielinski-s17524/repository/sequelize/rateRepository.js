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

exports.getRateByIds = (game_id, gamer_id) => {
    return Rate.findOne({
        where: {
            game_id: game_id,
            gamer_id: gamer_id
        }
    });
}

exports.createRate = (data) => {
    return Rate.create({
        rate: data.rate,
        comment: data.comment,
        game_id: data.game_id,
        gamer_id: data.gamer_id,
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