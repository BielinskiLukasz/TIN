const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Game = sequelize.define('Game', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    gameName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    yearReleased: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    minAge: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    minPlayersNum: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    maxPlayersNum: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    minPlayingTime: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    maxPlayingTime: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Game;
