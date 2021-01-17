const Gamer = require("../../model/sequelize/gamer");
const Rate = require("../../model/sequelize/rate");
const Game = require("../../model/sequelize/game");
const authUtil = require('../../util/authUtils');

exports.getGamers = () => {
    return Gamer.findAll();
};

exports.getGamerById = (gamerId) => {
    return Gamer.findByPk(gamerId,
        {
            include: [{
                model: Rate,
                as: 'rates',
                include: {
                    model: Game,
                    as: 'game'
                }
            }]
        });
};

exports.findByLogin = (login) => {
    return Gamer.findOne({
        where: { nick: login },
        include: [{
            model: Rate,
            as: 'rates',
            include: {
                model: Game,
                as: 'game'
            }
        }]
    });
}

exports.createGamer = (data) => {
    return Gamer.create({
        nick: data.nick,
        password: authUtil.hashPassword(data.password),
        bio: data.bio,
        email: data.email
    });
};

exports.updateGamer = (gamerId, data) => {
    data.password = authUtil.hashPassword(data.password);
    return Gamer.update(data, { where: { _id: gamerId } });
};

exports.deleteGamer = (gamerId) => {
    return Gamer.destroy({
        where: { _id: gamerId }
    });

}; 