var express = require('express');
var router = express.Router();
const creatorController = require('../controllers/creatorController');

/* GET home page. */
router.get('/list', creatorController.showCreatorList);

/* ... */
router.get('/add', creatorController.showAddCreatorForm);

/* ... */
router.get('/:creatorId', creatorController.showCreatorDetails);

/* ... */
router.get('/:creatorId/edit', creatorController.showEditCreatorForm);

module.exports = router;
