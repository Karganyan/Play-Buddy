const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  max_participants: Number,
  place: { type: mongoose.Schema.Types.ObjectId, ref: "Place" },
  user_ref: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  level: { type: mongoose.Schema.Types.ObjectId, ref: "Level" },
  chat_ref: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
});

module.exports = mongoose.model("Event", eventSchema);
