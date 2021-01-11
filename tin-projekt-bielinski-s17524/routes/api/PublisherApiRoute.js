const express = require('express');
const router = express.Router();

const publisherIdApiController = require('../../api/PublisherAPI');

router.get('/', publisherIdApiController.getPublishers);
router.get('/:publisherId', publisherIdApiController.getPublisherById);
router.post('/', publisherIdApiController.createPublisher);
router.put('/:publisherId', publisherIdApiController.updatePublisher);
router.delete('/:publisherId', publisherIdApiController.deletePublisher);

module.exports = router;