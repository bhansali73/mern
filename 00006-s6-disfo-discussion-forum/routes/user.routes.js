//Import Router
const router = require("express").Router();

//Validate User Query
const validateUserQuery = require("../middlewares/validators/user.validator");

//Validate API KEY
const verifyAPIKey = require("../middlewares/validators/verifyAPI.Key");

//Controllers
const {
  userRegistration,
  getAllUsers,
  getUserByUsername,
} = require("../controllers/user.controller");

router.post("/register", validateUserQuery, userRegistration); //register new user
router.get("/all", verifyAPIKey, getAllUsers); //getting all users
router.get("/:username", getUserByUsername); //get user by ID

module.exports = router;
