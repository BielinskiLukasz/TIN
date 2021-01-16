const express = require('express');
const router = express.Router();

const publisherApiController = require('../../api/publisherApi');

router.get('/', publisherApiController.getPublishers);
router.get('/:publisherId', publisherApiController.getPublisherById);
router.post('/', publisherApiController.createPublisher);
router.put('/:publisherId', publisherApiController.updatePublisher);
router.delete('/:publisherId', publisherApiController.deletePublisher);

module.exports = router;