const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  address: String,
  userType: String,
});

module.exports = mongoose.model("User", UserSchema);