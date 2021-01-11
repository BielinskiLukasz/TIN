const Publisher = require("../../model/sequelize/Publisher");
const Game = require("../../model/sequelize/Game");

exports.getPublishers = () => {
    return Publisher.findAll();
};

exports.getPublisherById = (publisherId) => {
    return Publisher.findByPk(publisherId,
        {
            include: [{
                model: Game,
                as: 'games'
            }]
        });
};

exports.createPublisher = (data) => {
    return Publisher.create({
        nick: data.nick,
        name: data.name,
        email: data.email,
        headquarters: data.headquarters
    });
};

exports.updatePublisher = (publisherId, data) => {
    return Publisher.update(data, { where: { _id: publisherId } });
};

exports.deletePublisher = (publisherId) => {
    return Publisher.destroy({
        where: { _id: publisherId }
    });

}; 