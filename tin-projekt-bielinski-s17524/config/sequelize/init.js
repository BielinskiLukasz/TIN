const sequelize = require('./sequelize');

const Game = require('../../model/sequelize/game');
const Gamer = require('../../model/sequelize/gamer');
const Publisher = require('../../model/sequelize/publisher');
const Rate = require('../../model/sequelize/rate');

module.exports = () => {
    Publisher.hasMany(Game, { as: 'games', foreignKey: { name: 'publisher_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Game.belongsTo(Publisher, { as: 'publisher', foreignKey: { name: 'publisher_id', allowNull: false } });

    Gamer.hasMany(Rate, { as: 'rates', foreignKey: { name: 'gamer_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Rate.belongsTo(Gamer, { as: 'gamer', foreignKey: { name: 'gamer_id', allowNull: false } });
    Game.hasMany(Rate, { as: 'rates', foreignKey: { name: 'game_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Rate.belongsTo(Game, { as: 'game', foreignKey: { name: 'game_id', allowNull: false } });

    let allGamers, allPublishers, allGames;
    return sequelize
        .sync({ force: true })
        .then(() => {
            return Gamer.findAll();
        })
        .then(gamers => {
            if (!gamers || gamers.length == 0) {
                return Gamer.bulkCreate([
                    { nick: 'Jan', bio: 'bio', email: 'jan.kowalski@acme.com', password: 'password' },
                    { nick: 'Adam', bio: '', email: 'adam.zielinski@acme.com', password: 'password' },
                    { nick: 'Marian', email: 'marian.nowak@acme.com', password: 'password' }
                ])
                    .then(() => {
                        return Gamer.findAll();
                    });
            } else {
                return gamers;
            }
        })
        .then(gamers => {
            allGamers = gamers;
            return Publisher.findAll();
        })
        .then(publishers => {
            if (!publishers || publishers.length == 0) {
                return Publisher.bulkCreate([
                    { nick: 'Albi', name: 'Dejf', email: 'albi@gmail.com', headquarters: 'Palác Karlín, Thámova 289/13, 186 00 Praha 8, Czechy' },
                    { nick: 'Albi Polska', name: 'DejfPL', email: 'albipolska@gmail.com', headquarters: 'ul. Toruńska 5, 30-056, Kraków, Polska' },
                    { nick: 'Angry Lion Games', name: 'koreaLions', email: 'angryliongames@gmail.com', headquarters: 'Korea' },
                    { nick: 'Ares Games', name: 'cybernex', email: 'aresgames@gmail.com', headquarters: 'Via dei Metalmeccanici 16, 55041, Capezzano Pianore, Włochy' },
                    { nick: 'Asterion Press', name: 'Asterion', email: 'asterion@gmail.com', headquarters: 'Al-Rehab Complex, mezzanine shop 75, Tunisia St, Hawally, Kuwejt' },
                    { nick: 'Devir', name: 'Devir	', email: 'devir@gmail.com', headquarters: 'R. Basílio da Cunha, 727 - Vila DeodoroSão Paulo - SP, 01544-001, Brazylia' },
                    { nick: 'Jolly Thinkers	', name: 'JollyThinkers', email: 'jollythinkers@gmail.com', headquarters: '155 Sai Yeung Choi St N, Prince Edward, Hongkong' },
                    { nick: 'Lacerta', name: 'przemko', email: 'lacerta@gmail.com', headquarters: 'ul. Czarnieckiego 15 53-638, Wrocław, Polska' }
                ])
                    .then(() => {
                        return Publisher.findAll();
                    });
            } else {
                return publishers;
            }
        })
        .then(publishers => {
            allPublishers = publishers;
            return Game.findAll();
        })
        .then(games => {
            if (!games || games.length == 0) {
                return Game.bulkCreate([
                    { gameName: 'Gloomhaven', yearReleased: 2017, minAge: 14, minPlayersNum: 1, maxPlayersNum: 4, minPlayingTime: 60, maxPlayingTime: 120, publisher_id: allPublishers[0]._id },
                    { gameName: 'Pandemic Legacy: Season 1', yearReleased: 2012, minAge: 13, minPlayersNum: 2, maxPlayersNum: 4, minPlayingTime: 150, maxPlayingTime: 180, publisher_id: allPublishers[1]._id },
                    { gameName: 'War of the Ring: Second Edition', yearReleased: 2015, minAge: 13, minPlayersNum: 2, maxPlayersNum: 4, minPlayingTime: 60, maxPlayingTime: 60, publisher_id: allPublishers[2]._id }
                ])
                    .then(() => {
                        return Game.findAll();
                    });
            } else {
                return games;
            }
        })
        .then(games => {
            allGames = games;
            return Rate.findAll();
        })
        .then(rates => {
            if (!rates || rates.length == 0) {
                return Rate.bulkCreate([
                    { gamer_id: allGamers[0]._id, game_id: allGames[0]._id, rate: 9 },
                    { gamer_id: allGamers[0]._id, game_id: allGames[2]._id, rate: 10 },
                    { gamer_id: allGamers[1]._id, game_id: allGames[0]._id, rate: 8 },
                    { gamer_id: allGamers[1]._id, game_id: allGames[1]._id, rate: 9 },
                    { gamer_id: allGamers[1]._id, game_id: allGames[2]._id, rate: 7 },
                    { gamer_id: allGamers[2]._id, game_id: allGames[0]._id, rate: 10 }
                ]);
            } else {
                return rates;
            }
        });
};