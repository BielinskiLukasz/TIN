const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Collection = sequelize.define('Collection', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    }
});

module.exports = Collection;
