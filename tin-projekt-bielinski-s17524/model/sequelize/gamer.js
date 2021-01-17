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
        unique: true,
        validate: {
            notNull: {
                msg: "Pole jest wymagane"
            },
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2, 60],
                msg: "Pole powinno zawierać od 2 do 60 znaków"
            }
        }
    },
    bio: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            len: {
                args: [0, 1000],
                msg: "Pole powinno zawierać do 1000 znaków"
            }
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: "Pole jest wymagane"
            },
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [5, 60],
                msg: "Pole powinno zawierać od 5 do 60 znaków"
            },
            isEmail: {
                msg: 'Pole powinno zawierać prawidłowy adres email'
            }
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Hasło jest wymagane"
            },
            notEmpty: {
                msg: "Hasło jest wymagane"
            },
            len: {
                args: [8, 100],
                msg: "Hasło powinno zawierać min 8 znaków"
            }
        }
    }
});

module.exports = Gamer;
