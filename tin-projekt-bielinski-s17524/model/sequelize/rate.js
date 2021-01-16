const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Rate = sequelize.define('Rate', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    rate: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Pole jest wymagane - jeżeli chcesz usunąć ocenę wybierz opcję 'usuń' na liście ocen"
            },
            notEmpty: {
                msg: "Pole jest wymagane - jeżeli chcesz usunąć ocenę wybierz opcję 'usuń' na liście ocen"
            },
            isInt: {
                msg: "Pole powinno być liczbą naturalną"
            },
            min: {
                args: [1],
                msg: "Pole powinno być liczbą naturalną nie mniejszą od 1"
            },
            max: {
                args: [10],
                msg: "Pole powinno być liczbą naturalną nie większą od 10"
            }
        }
    },
    comment: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            len: {
                args: [0, 500],
                msg: "Pole powinno zawierać do 500 znaków"
            }
        }
    }
});

module.exports = Rate;
