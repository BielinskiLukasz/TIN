const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Publisher = sequelize.define('Publisher', {
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
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    headquarters: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Publisher;
