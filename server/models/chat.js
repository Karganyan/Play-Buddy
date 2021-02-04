const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  event_ref: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  });

module.exports = mongoose.model("Chat", chatSchema);
