var express = require('express');
var router = express.Router();
const publisherController = require('../controllers/publisherController');

/* GET publishers list */
router.get('/list', publisherController.showPublisherList);

/* GET publisher add form */
router.get('/add', publisherController.showAddPublisherForm);

/* GET publisher details */
router.get('/details/:publisherId', publisherController.showPublisherDetails);

/* GET publisher edit form */
router.get('/edit/:publisherId', publisherController.showEditPublisherForm);

module.exports = router;
