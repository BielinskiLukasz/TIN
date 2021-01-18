var express = require('express');
var router = express.Router();
const gamerController = require('../controllers/gamerController');
const authUtils = require('../util/authUtils');

router.get('/', gamerController.showGamerList);
router.get('/add', gamerController.showAddGamerForm);
router.get('/details/:gamerId', authUtils.permitAuthenticatedUser, gamerController.showGamerDetails);
router.get('/edit/:gamerId', authUtils.permitAuthenticatedUser, gamerController.showEditGamerForm);
router.post('/add', gamerController.addGamer);
router.post('/edit', authUtils.permitAuthenticatedUser, gamerController.updateGamer);
router.get('/delete/:gamerId', authUtils.permitAuthenticatedUser, gamerController.deleteGamer);

module.exports = router;
