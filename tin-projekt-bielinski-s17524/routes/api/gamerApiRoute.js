const express = require('express');
const router = express.Router();

const gamerApiController = require('../../api/gamerApi');

router.get('/', gamerApiController.getGamers);
router.get('/:gamerId', gamerApiController.getGamerById);
router.post('/', gamerApiController.createGamer);
router.put('/:gamerId', gamerApiController.updateGamer);
router.delete('/:gamerId', gamerApiController.deleteGamer);

module.exports = router;