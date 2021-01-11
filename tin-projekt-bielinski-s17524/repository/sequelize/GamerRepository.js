const Gamer = require("../../model/sequelize/Gamer");
const Rate = require("../../model/sequelize/Rate");
const Game = require("../../model/sequelize/Game");

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

exports.createGamer = (data) => {
    return Gamer.create({
        nick: data.nick,
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