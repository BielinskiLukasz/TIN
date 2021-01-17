var express = require('express');
var router = express.Router();
const gameController = require('../controllers/gameController');
const authUtils = require('../util/authUtils');

router.get('/', gameController.showGameList);
router.get('/add', authUtils.permitAuthenticatedUser, gameController.showAddGameForm);
router.get('/details/:gameId', gameController.showGameDetails);
router.get('/edit/:gameId', authUtils.permitAuthenticatedUser, gameController.showEditGameForm);
router.post('/add', authUtils.permitAuthenticatedUser, gameController.addGame);
router.post('/edit', authUtils.permitAuthenticatedUser, gameController.updateGame);
router.get('/delete/:gameId', authUtils.permitAuthenticatedUser, gameController.deleteGame);

module.exports = router;
