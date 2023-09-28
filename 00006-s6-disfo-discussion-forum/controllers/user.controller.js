const userModel = require("../models/user.model");

const userRegistration = async (req, res) => {
  console.log(
    `URL: /user${req.url == "/" ? "" : req.url}, Method: ${
      req.method
    }, Body: ${JSON.stringify(req.body)}, Timestamp: ${new Date()}`
  );
  const { fullName, username, email } = req.body;

  try {
    // If both username and email are unique, create the new user
    const newUser = new userModel({ fullName, username, email });
    const result = await newUser.save();
    res.status(201).json({ message: "User created", user: result });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({
        message: "Failed to create new user",
        reason: "Already Exists in DB",
      });
    } else {
      res.status(500).json({ message: "Failed to create new user", error });
    }
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Could Not Fetch Users from DB",
      error,
    });
  }
};

const getUserByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const result = await userModel.findOne({ username: username });

    if (!result) {
      // User not found
      return res.status(404).json({ message: "User not found!", username });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching user",
      error,
    });
  }
};

module.exports = {
  userRegistration,
  getAllUsers,
  getUserByUsername,
};
