const { Router } = require('express')
const router = Router()
const passport = require('passport')
const Event = require('../models/event')
const User = require('../models/user')
const Chat = require('../models/chat')


router.post('/Signin', passport.authenticate('local'), async (req, res) => {
  req.session.user = { id: req.user._id, name: req.user.name }
  res.json({ status: 200, user: req.session.user })
})

router.post('/signup', passport.authenticate('local'), async (req, res) => {
  req.session.user = { id: req.user._id, name: req.user.name }
  res.json({ status: 200, user: req.session.user })
})

router.get('/in-session', async (req, res) => {
  if (req.session.user) {
    const user = await User.findById(req.session.user.id).populate('userEvents')
    const chats = await Chat.find({ '_id': { $in: user.userChats } }).populate('messages');
    res.json({ user: req.session.user, userEvents: user.userEvents, userChats: chats })
  } else {
    res.json({ user: null })
  }
})

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}), (req, res) => {

})

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  req.session.user = { id: req.user._id, name: req.user.name }
  res.redirect('http://localhost:3000')
})

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.clearCookie('sid')
  res.sendStatus(200);
})


module.exports = router
