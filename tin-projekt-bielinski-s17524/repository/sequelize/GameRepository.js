const Gamer = require("../../model/sequelize/Gamer");
const Rate = require("../../model/sequelize/Rate");
const Game = require("../../model/sequelize/Game");
const Publisher = require("../../model/sequelize/Publisher");

exports.getGames = () => {
    return Game.findAll();
};

exports.getGameById = (gameId) => {
    return Game.findByPk(gameId,
        {
            include: [{
                model: Game,
                as: 'game'
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