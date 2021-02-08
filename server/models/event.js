const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  max_participants: Number,
  time: Date,
  address: String,
  coordinates: {type: Array},
  game: String,
  category: Array,
  thumbnail: {type: String, default: 'https://sun9-71.userapi.com/c850720/v850720894/10d47c/NU0_158reys.jpg'},
  place: { type: mongoose.Schema.Types.ObjectId, ref: "Place" },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  level: { type: mongoose.Schema.Types.ObjectId, ref: "Level" },
  chat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat' },
  visible: { type: Boolean, default: true },
  private: { type: Boolean, default: false },
});

module.exports = mongoose.model("Event", eventSchema);
