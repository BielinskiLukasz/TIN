const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Rate = sequelize.define('Rate', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    rate: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    comment: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Rate;
