const Gamer = require("../../model/sequelize/gamer");
const Rate = require("../../model/sequelize/rate");
const Game = require("../../model/sequelize/game");
const Publisher = require("../../model/sequelize/publisher");

exports.getGames = () => {
    return Game.findAll();
};

exports.getGameById = (gameId) => {
    return Game.findByPk(gameId,
        {
            include: [{
                model: Publisher,
                as: 'publisher'
            }, {
                model: Rate,
                as: 'rates',
                include: {
                    model: Gamer,
                    as: 'gamer'
                }
            }]
        });
};

exports.createGame = (data) => {
    return Game.create({
        gameName: data.gameName,
        yearReleased: data.yearReleased,
        minAge: data.minAge,
        minPlayersNum: data.minPlayersNum,
        maxPlayersNum: data.maxPlayersNum,
        minPlayingTime: data.minPlayingTime,
        maxPlayingTime: data.maxPlayingTime,
        publisher_id: data.publisher_id
    });
};

exports.updateGame = (gameId, data) => {
    return Game.update(data, { where: { _id: gameId } });
};

exports.deleteGame = (gameId) => {
    return Game.destroy({
        where: { _id: gameId }
    });

}; 