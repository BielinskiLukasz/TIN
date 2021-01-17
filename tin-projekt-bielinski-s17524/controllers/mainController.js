exports.showHomePage = (req, res, next) => {
    res.render('pages/index', { navLocation: 'main' });
}

exports.showLogPage = (req, res, next) => {
    res.render('pages/profile/profile', { navLocation: 'profile' });
}
