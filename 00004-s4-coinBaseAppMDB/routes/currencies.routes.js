const router = require("express").Router();

const {
    getCurrencies,
    getCurrencyDetails
} = require('../controllers/currencies.controller');

//Currencies
router.get('/', getCurrencies);
router.get('/:symbol', getCurrencyDetails);

module.exports = router;