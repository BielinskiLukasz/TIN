var express = require('express');
var router = express.Router();
const publisherController = require('../controllers/publisherController');

/* GET home page. */
router.get('/list', publisherController.showPublisherList);

/* ... */
router.get('/add', publisherController.showAddPublisherForm);

/* ... */
router.get('/:publisherId', publisherController.showPublisherDetails);

/* ... */
router.get('/:publisherId/edit', publisherController.showEditPublisherForm);

module.exports = router;
