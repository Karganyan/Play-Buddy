const { Router } = require('express')
const router = Router()
const Chat = require('../models/chat');
const Event = require('../models/event');
const Game = require('../models/game')
const User = require('../models/user');

router.post('/', async (req, res) => {
  // console.log(req.user._id);
  // console.log(req.body);
  const { title, description, max_participants } = req.body
  const newChat = new Chat({ messages: [], eventTitle: title });
  const newEvent = new Event({ title, description, max_participants, chat: newChat._id, creator: req.user._id, participants: [req.user._id] });
  const user = await User.findById(req.user._id)
  await newChat.save();
  await newEvent.save();
  user.userEvents.push(newEvent._id)
  user.userChats.push(newChat._id)
  await user.save()
  res.json([newChat, newEvent]);
})

router.get('/', async (req, res) => {
  const allEvent = await Event.find({ visible: true })
  res.json(allEvent)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const currentEvent = await Event.findById(id)
  res.json(currentEvent)
})

module.exports = router
