const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  club: String,
  username: String,
  dateTime: String,
});

module.exports = mongoose.model("Chat", ChatSchema);