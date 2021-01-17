const Gamer = require("../../model/sequelize/gamer");
const Rate = require("../../model/sequelize/rate");
const Game = require("../../model/sequelize/game");

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
        where: { nick: login }
    });
}

exports.createGamer = (data) => {
    return Gamer.create({
        nick: data.nick,
        password: data.password,
        bio: data.bio,
        email: data.email
    });
};

exports.updateGamer = (gamerId, data) => {
    return Gamer.update(data, { where: { _id: gamerId } });
};

exports.deleteGamer = (gamerId) => {
    return Gamer.destroy({
        where: { _id: gamerId }
    });

}; 