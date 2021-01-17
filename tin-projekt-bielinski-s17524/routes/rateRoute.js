var express = require('express');
var router = express.Router();
const rateController = require('../controllers/rateController');

router.get('/', rateController.showRateList);
router.get('/my-scores', rateController.showLoggedUserRateList);
router.get('/add', rateController.showAddRateForm);
router.get('/details/:rateId', rateController.showRateDetails);
router.get('/edit/:rateId', rateController.showEditRateForm);
router.post('/add', rateController.addRate);
router.post('/edit', rateController.updateRate);
router.get('/delete/:rateId', rateController.deleteRate);

module.exports = router;
