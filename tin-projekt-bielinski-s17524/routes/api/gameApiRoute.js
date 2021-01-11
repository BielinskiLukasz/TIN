const express = require('express');
const router = express.Router();

const gameIdApiController = require('../../api/gameApi');

router.get('/', gameIdApiController.getGames);
router.get('/:gameId', gameIdApiController.getGameById);
router.post('/', gameIdApiController.createGame);
router.put('/:gameId', gameIdApiController.updateGame);
router.delete('/:gameId', gameIdApiController.deleteGame);

module.exports = router;