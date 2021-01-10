const Sequelize = require('sequelize');

const sequelize = new Sequelize('tin-example-sequelize', 'root', 'root', {
    dialect: 'mysql',
    // port: 3306,
    host: 'localhost'
});

module.exports = sequelize;