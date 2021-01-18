var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');
const AuthController = require('../controllers/authController');
const GamerController = require('../controllers/gamerController');

router.get('/', mainController.showHomePage);
router.get('/sign', GamerController.showAddGamerForm);
router.post('/sign', GamerController.addGamer);
router.get('/login', mainController.showLogPage);
router.get('/profile', mainController.showLogPage);
router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);
router.get('/reset-pass', mainController.showResetPasswordPage);
router.post('/reset-pass', mainController.resetPassword);

module.exports = router;
