const express = require('express');
const router = express.Router();

const rateApiController = require('../../api/rateApi');

router.get('/', rateApiController.getRates);
router.get('/:rateId', rateApiController.getRateById);
router.post('/', rateApiController.createRate);
router.put('/:rateId', rateApiController.updateRate);
router.delete('/:rateId', rateApiController.deleteRate);

module.exports = router;