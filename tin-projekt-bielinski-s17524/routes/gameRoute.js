var express = require('express');
var router = express.Router();
const gameController = require('../controllers/gameController');

router.get('/', gameController.showGameList);
router.get('/add', gameController.showAddGameForm);
router.get('/details/:gameId', gameController.showGameDetails);
router.get('/edit/:gameId', gameController.showEditGameForm);
router.post('/add', gameController.addGame);
router.post('/edit', gameController.updateGame);
router.get('/delete/:gameId', gameController.deleteGame);

module.exports = router;
