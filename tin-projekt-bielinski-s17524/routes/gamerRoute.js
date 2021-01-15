var express = require('express');
var router = express.Router();
const gamerController = require('../controllers/gamerController');

router.get('/', gamerController.showGamerList);
router.get('/add', gamerController.showAddGamerForm);
router.get('/details/:gamerId', gamerController.showGamerDetails);
router.get('/edit/:gamerId', gamerController.showEditGamerForm);
router.post('/add', gamerController.addGamer);
router.post('/edit', gamerController.updateGamer);
router.get('/delete/:gamerId', gamerController.deleteGamer);

module.exports = router;
