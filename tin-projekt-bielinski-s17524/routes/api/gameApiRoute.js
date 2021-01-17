const express = require('express');
const router = express.Router();

const gameApiController = require('../../api/gameApi');
const authUtils = require('../../util/authUtils');

router.get('/', gameApiController.getGames);
router.get('/:gameId', gameApiController.getGameById);
router.post('/', authUtils.permitAuthenticatedUser, gameApiController.createGame);
router.put('/:gameId', authUtils.permitAuthenticatedUser, gameApiController.updateGame);
router.delete('/:gameId', authUtils.permitAuthenticatedUser, gameApiController.deleteGame);

module.exports = router;