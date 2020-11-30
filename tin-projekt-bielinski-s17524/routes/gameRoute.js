var express = require('express');
var router = express.Router();
const gameController = require('../controllers/gameController');

/* GET home page. */
router.get('/list', gameController.showGameList);

module.exports = router;
