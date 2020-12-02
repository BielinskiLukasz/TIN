var express = require('express');
var router = express.Router();
const gameController = require('../controllers/gameController');

/* GET home page. */
router.get('/list', gameController.showGameList);

/* ... */
router.get('/add', gameController.showAddGameForm);

/* ... */
router.get('/details/:gameId', gameController.showGameDetails);

/* ... */
router.get('/edit/:gameId', gameController.showEditGameDetails);

module.exports = router;