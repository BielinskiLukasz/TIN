exports.showPublisherList = (req, res, next) => {
    res.render('pages/publisher/list', { navLocation: 'publishers' });
}

exports.showAddPublisherForm = (req, res, next) => {
    res.render('pages/publisher/form', { navLocation: 'publisherForm' });
}

exports.showPublisherDetails = (req, res, next) => {
    res.render('pages/publisher/details', { navLocation: '' });
}

exports.showEditPublisherForm = (req, res, next) => {
    res.render('pages/publisher/edit', { navLocation: '' });
}
