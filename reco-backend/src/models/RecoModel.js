const mongoose = require("mongoose");

const RecoSchema = new mongoose.Schema({
  category: String,
  name: String,
  cost: String,
  source: String,
  description: String,
  genre: String,
  img: String,
  userId: String,
});

module.exports = mongoose.model("Reco", RecoSchema);