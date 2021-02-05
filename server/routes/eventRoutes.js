const { Router } = require('express')
const router = Router()
const Chat = require('../models/chat');
const Event = require('../models/event');

router.post('/', async (req, res) => {
  console.log(req.user._id);
  console.log(req.body);
  const { title, description, max_participants } = req.body
  // req.body
  const newChat = new Chat({ messages: [] });
  const newEvent = new Event({ title, description, max_participants, chat: newChat._id });
  await newChat.save();
  await newEvent.save();
  res.json([newChat, newEvent]);
})

module.exports = router
