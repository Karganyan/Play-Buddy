const mongoose = require("mongoose");

const levelSchema = new mongoose.Schema({
  title: String, // beginner or advanced
});

module.exports = mongoose.model("Level", levelSchema);
