const gamerRepository = require('../repository/sequelize/gamerRepository');

exports.showHomePage = (req, res, next) => {
    res.render('pages/index', { navLocation: 'main' });
}

exports.showLogPage = (req, res, next) => {
    res.render('pages/profile/profile', { navLocation: 'profile' });
}

exports.showResetPasswordPage = (req, res, next) => {
    res.render('pages/profile/reset-pass', {
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
            if (gamer.email == gamerData.email) {
                gamerRepository.updateGamer(gamer._id, gamerData)
                    .then(result => {
                        res.redirect('/gamer/?m=' + encodeURIComponent('Zresetowano hasło'));
                    })
                    .catch(err => {
                        res.render('pages/profile/reset-pass'), {
                            gamer: gamerData,
                            navLocation: 'resetPasswordForm',
                            validationErrors: err.errors
                        }
                    });
            } else {
                res.render('pages/profile/reset-pass?m=' + encodeURIComponent('Brak wskazanej pary nick + email w bazie serwisu'), {
                    gamer: gamerData,
                    navLocation: 'resetPasswordForm',
                    validationErrors: err.errors
                });
            }
        }).catch(err => {
            res.render('pages/profile/reset-pass'), {
                gamer: gamerData,
                navLocation: 'resetPasswordForm',
                validationErrors: err.errors
            }
        });
}