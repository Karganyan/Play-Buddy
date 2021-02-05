const { Router } = require('express')
const router = Router()
const passport = require('passport')

router.post('/signin', passport.authenticate('local'), async (req, res) => {
  req.session.user = { id: req.user._id, name: req.user.name }
  res.json({ status: 200, user: req.session.user })
})

router.post('/signup', passport.authenticate('local'), async (req, res) => {
  req.session.user = { id: req.user._id, name: req.user.name }
  res.json({ status: 200, user: req.session.user })
})

router.get('/in-session', async (req, res) => {
  if (req.session) {
    console.log(req.user)
    res.json(req.session.user)
  }
})

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.clearCookie('sid')
  res.sendStatus(200);
})


module.exports = router
