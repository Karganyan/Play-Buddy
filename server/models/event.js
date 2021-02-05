const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  max_participants: Number,
  place: { type: mongoose.Schema.Types.ObjectId, ref: "Place" },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  level: { type: mongoose.Schema.Types.ObjectId, ref: "Level" },
  chat_ref: { type: mongoose.Schema.GameTypes.ObjectId, ref: "Event" },
  visible: { type: Boolean, default: true },
  private: { type: Boolean, default: true },
});

module.exports = mongoose.model("Event", eventSchema);
