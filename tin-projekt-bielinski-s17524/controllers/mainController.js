exports.showHomePage = (req, res, next) => {
    res.render('pages/index', { navLocation: 'main' });
}