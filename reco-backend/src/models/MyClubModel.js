const mongoose = require("mongoose");


const MyClubSchema = new mongoose.Schema({
    category: String,
    name: String,
    description: String,
    img: String,
    userId: String,
  });
  
  module.exports = mongoose.model("MyClub", MyClubSchema);