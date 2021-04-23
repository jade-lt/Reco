const mongoose = require("mongoose");

const ClubSchema = new mongoose.Schema({
  category: String,
  name: String,
  description: String,
  img: String,
});

module.exports = mongoose.model("Club", ClubSchema);