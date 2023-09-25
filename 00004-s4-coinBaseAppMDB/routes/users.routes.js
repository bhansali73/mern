//Import Router
const router = require("express").Router();

//validateSearchQuery is a middleware validator for users
const { validateSearchQuery } = require('../middlewares/validators/users.validators');

//User controllers
const {
    getUsers,
    getUsersByGenderAndAge,
    getUsersByUUID
} = require('../controllers/users.controller');

//Users has a middleware validator applied on the route itself
//if it is validated, next() to controller
router.get('/', validateSearchQuery, getUsers);
router.get('/search', validateSearchQuery, getUsersByGenderAndAge);
router.get('/:uuid', validateSearchQuery, getUsersByUUID);

module.exports = router;