const express = require('express')
const router = express.Router()

const ConversionController = require('../controllers/conversion-controller')

router.get('/:from/:to/:value', ConversionController.doConversion)

module.exports = router