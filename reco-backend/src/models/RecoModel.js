const mongoose = require("mongoose");

const RecoSchema = new mongoose.Schema({
  category: String,
  name: String,
  cost: String,
  source: Number,
  description: String,
  genre: String,
  img: String,
});

module.exports = mongoose.model("Reco", RecoSchema);