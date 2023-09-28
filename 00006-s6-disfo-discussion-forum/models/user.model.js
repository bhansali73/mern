const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, maxLength: 50, default: "" },
  username: { type: String, maxLength: 25, lowercase: true, unique: true, required: true },
  email: {type: String, unique: true, required: true, lowercase: true},
});

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;