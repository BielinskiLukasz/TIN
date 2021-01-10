const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Game = sequelize.define('Game', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nick: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    bio: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Game;
