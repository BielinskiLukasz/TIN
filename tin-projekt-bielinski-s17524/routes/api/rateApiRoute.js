const express = require('express');
const router = express.Router();

const rateIdApiController = require('../../api/rateApi');

router.get('/', rateIdApiController.getRates);
router.get('/:rateId', rateIdApiController.getRateById);
router.post('/', rateIdApiController.createRate);
router.put('/:rateId', rateIdApiController.updateRate);
router.delete('/:rateId', rateIdApiController.deleteRate);

module.exports = router;