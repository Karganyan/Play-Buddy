// const mongoose = require("mongoose")
// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   email: String,
//   fav_games: { type: mongoose.Schema.Types.ObjectId, ref: "Game" },
//   googleID: String
// })
// module.exports = mongoose.model("User", userSchema)

const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String},
  googleId: {type: String},
})

module.exports = model('user', userSchema)
