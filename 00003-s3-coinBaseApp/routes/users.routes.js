const router = require("express").Router();

const {
    getUsers,
    getUsersByGenderAndAge,
    getUsersByUUID
} = require('../controllers/users.controller');

//Users
router.get('/', getUsers);
router.get('/search', getUsersByGenderAndAge);
router.get('/:uuid', getUsersByUUID);

module.exports = router;