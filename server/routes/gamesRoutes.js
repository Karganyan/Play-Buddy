const { Router } = require("express");
const router = Router();
const Event = require("../models/event");
const Game = require("../models/game");
const User = require("../models/user");
const Tags = require("../models/tag");

// router.post("/tags", async (req, res) => {
//   console.log(req.body);
//   req.body.tags.forEach(id => {
//     const currTags = await Tag.findById(id);
//   })
//   console.log(currTags);
//   res.json({ status: 200/* , favGames: currUser.fav_games  */});
// }); 
