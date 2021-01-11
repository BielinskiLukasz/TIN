const express = require('express');
const router = express.Router();

const gamerIdApiController = require('../../api/gamerApi');

router.get('/', gamerIdApiController.getGamers);
router.get('/:gamerId', gamerIdApiController.getGamerById);
router.post('/', gamerIdApiController.createGamer);
router.put('/:gamerId', gamerIdApiController.updateGamer);
router.delete('/:gamerId', gamerIdApiController.deleteGamer);

module.exports = router;