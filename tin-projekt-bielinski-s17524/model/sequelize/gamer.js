const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Gamer = sequelize.define('Gamer', {
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

module.exports = Gamer;
