const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Game = sequelize.define('Game', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    gameName: {
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
                args: [2, 200],
                msg: "Pole powinno zawierać od 2 do 200 znaków"
            }
        }
    },
    yearReleased: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Pole jest wymagane"
            },
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isInt: {
                msg: "Pole powinno być liczbą naturalną"
            }
        }
    },
    minAge: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Pole jest wymagane"
            },
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isInt: {
                msg: "Pole powinno być liczbą naturalną"
            },
            min: {
                args: [0],
                msg: "Pole powinno być liczbą naturalną nie mniejszą od 0"
            },
            max: {
                args: [24],
                msg: "Pole powinno być liczbą naturalną nie większą od 24"
            }
        }
    },
    minPlayersNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Pole jest wymagane"
            },
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isInt: {
                msg: "Pole powinno być liczbą naturalną"
            },
            min: {
                args: [0],
                msg: "Pole powinno być liczbą naturalną nie mniejszą od 0"
            }
        }
    },
    maxPlayersNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Pole jest wymagane"
            },
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isInt: {
                msg: "Pole powinno być liczbą naturalną"
            },
            maxIsGreaterThanMin() {
                if (parseInt(this.minPlayersNum) > parseInt(this.maxPlayersNum)) {
                    throw new Error('Pole powinno być liczbą naturalną nie mniejszą od minimalnej liczby gracz');
                }
            }
        }
    },
    minPlayingTime: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Pole jest wymagane"
            },
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isInt: {
                msg: "Pole powinno być liczbą naturalną"
            },
            min: {
                args: [0],
                msg: "Pole powinno być liczbą naturalną nie mniejszą od 0"
            }
        }
    },
    maxPlayingTime: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Pole jest wymagane"
            },
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isInt: {
                msg: "Pole powinno być liczbą naturalną"
            },
            maxIsGreaterThanMin() {
                if (parseInt(this.minPlayingTime) > parseInt(this.maxPlayingTime)) {
                    throw new Error('Pole powinno być liczbą naturalną nie mniejszą od minimalnego czasu gry');
                }
            }
        }
    },
    averageRate: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        validate: {
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
    }
});

module.exports = Game;
