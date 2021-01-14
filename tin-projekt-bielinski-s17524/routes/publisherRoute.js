var express = require('express');
var router = express.Router();
const publisherController = require('../controllers/publisherController');

router.get('/', publisherController.showPublisherList);
router.get('/add', publisherController.showAddPublisherForm);
router.get('/details/:publisherId', publisherController.showPublisherDetails);
router.get('/edit/:publisherId', publisherController.showEditPublisherForm);
router.post('/add', publisherController.addPublisher);
router.post('/edit', publisherController.updatePublisher);
router.get('/delete/:publisherId', publisherController.deletePublisher);

module.exports = router;
