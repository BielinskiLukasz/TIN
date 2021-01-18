const gamerRepository = require('../repository/sequelize/gamerRepository');

exports.showHomePage = (req, res, next) => {
    res.render('pages/index', { navLocation: 'main' });
}

exports.showLogPage = (req, res, next) => {
    res.render('pages/profile/profile', { navLocation: 'profile' });
}

exports.showResetPasswordPage = (req, res, next) => {
    res.render('pages/profile/resetpass', {
        gamer: {},
        navLocation: 'resetPasswordForm',
        validationErrors: [],
        message: req.param("m")
    });
}

exports.resetPassword = (req, res, next) => {
    const gamerData = { ...req.body };
    gamerRepository.findByLogin(gamerData.nick)
        .then(gamer => {
            if (!gamer) {
                res.render('pages/profile/resetpass', {
                    gamer: {},
                    navLocation: 'resetPasswordForm',
                    validationErrors: [],
                    message: "Brak wskazanej pary nick + email w bazie serwisu"
                });
            } else if (gamer.email == gamerData.email) {
                gamerRepository.updateGamer(gamer._id, gamerData)
                    .then(result => {
                        res.redirect('/gamer/?m=' + encodeURIComponent('Zresetowano hasło'));
                    })
                    .catch(err => {
                        res.render('pages/profile/resetpass'), {
                            gamer: gamerData,
                            navLocation: 'resetPasswordForm',
                            validationErrors: err.errors,
                            message: ''
                        }
                    });
            } else {
                res.render('pages/profile/resetpass', {
                    gamer: {},
                    navLocation: 'resetPasswordForm',
                    validationErrors: [],
                    message: "Brak wskazanej pary nick + email w bazie serwisu"
                });
            }
        }).catch(err => {
            res.render('pages/profile/resetpass'), {
                gamer: {},
                navLocation: 'resetPasswordForm',
                validationErrors: err.errors,
                message: ''
            }
        });
}