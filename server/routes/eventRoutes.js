const { Router } = require('express')
const router = Router()
const Chat = require('../models/chat');
const Event = require('../models/event');

router.post('/', async (req, res) => {
  // req.user._id
  console.log(req.body);
  // req.body
  // const newChat = new Chat({messages:[]})
  // const newEvent = new Event({})
  res.send('test');
})

// http://localhost:3001/event/event

module.exports = router
