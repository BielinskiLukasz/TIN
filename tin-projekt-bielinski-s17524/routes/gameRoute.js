var express = require('express');
var router = express.Router();
const gameController = require('../controllers/gameController');

/* GET home page. */
router.get('/list', gameController.showGameList);

/* ... */
router.get('/add', gameController.showAddGameForm);

/* ... */
router.get('/:gameId', gameController.showGameDetails);

/* ... */
router.get('/:gameId/edit', gameController.showEditGameDetails);

module.exports = router;
