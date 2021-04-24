const mongoose = require("mongoose");


const GenreSchema = new mongoose.Schema({
    name: String,
    img: String,
  });
  
  module.exports = mongoose.model("Genre", GenreSchema);