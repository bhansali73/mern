const router = require("express").Router();

const {
    home
} = require('../controllers/index.controller');


router.get('/', home);

module.exports = router;