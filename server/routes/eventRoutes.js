const { Router } = require('express')
const router = Router()
const Chat = require('../models/chat');
const Event = require('../models/event');
const Game = require('../models/game')
const User = require('../models/user');
const Tags = require('../models/tag')


router.post('/', async (req, res) => {
  const { title, description, max_participants, address, game, coordinates,category, thumbnail } = req.body
  const newCoordinates = coordinates.split(' ').map(el => +el).reverse()

  console.log('COORDINATES', newCoordinates)

  const newChat = new Chat({ messages: [], eventTitle: title });
  const newEvent = new Event({ title, description,category, max_participants, chat: newChat._id, creator: req.user._id, participants: [req.user._id], address, game, coordinates: newCoordinates });
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

router.get('/tags', async (req, res) => {
  const tags = await Tags.find()
  res.json({status: 200, tags})
})

router.get('/games/', async (req, res) => {
  const { title } = req.params
  // const games = await Game.find({'tags' : {$in: title}}).populate()
  const games = await Game.find()
  res.json({status: 200, games})
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const currentEvent = await Event.findById(id)
  res.json(currentEvent)
})

router.post('/join', async (req, res) => {
  const { userId, eventId } = req.body;
  const event = await Event.findById(eventId)
  const user = await User.findById(userId);
  user.userEvents = [...user.userEvents, eventId];
  user.userChats = [...user.userChats, event.chat];
  event.participants = [...event.participants, userId];
  await user.save();
  await event.save();
  const chat = await Chat.findById(event.chat).populate('messages')
  console.log(chat);
  console.log(event);
  res.json({ chat, event});
})

module.exports = router
