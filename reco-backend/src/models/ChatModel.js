const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  club: String,
  username: String,
  userId: String,
  dateTime: String,
  subject: String,
  comment: String,
});

module.exports = mongoose.model("Chat", ChatSchema);