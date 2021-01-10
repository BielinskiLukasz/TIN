const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const DesignerRole = sequelize.define('DesignerRole', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    }
});

module.exports = DesignerRole;
