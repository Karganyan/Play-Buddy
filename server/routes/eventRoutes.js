const { Router } = require('express')
const router = Router()
const Chat = require('../models/chat');
const Event = require('../models/event');

router.post('/event', async (req, res) => {
  console.log(req.body);
  // req.body
  const newChat = new Chat({messages:[]})
  const newEvent = new Event({})
})


module.exports = router
