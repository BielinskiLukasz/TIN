const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Gamer = sequelize.define('Gamer', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    gametName: {
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

module.exports = Gamer;
