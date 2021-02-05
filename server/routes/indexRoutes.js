const { Router } = require('express')
const UserModel = require('../models/user')
// const mongoose = require('mongoose')
const router = Router()


router.get('/', (req, res) => {
  res.send('Server')
})

router.post('/edit', async (req, res) => {
  const { name, info, phone } = req.body.inputs;
  req.session.user = { ...req.user, name, id: req.body.userId }

  console.log(req.session.user);

  console.log(name, info, phone)
  // console.log(req.body);
  const user = await UserModel.findByIdAndUpdate(req.body.userId, {
    $set: {
      name,
      information: info,
      phone
    }
  }, null, () => {});
  console.log('=======>USER',user);

  res.json(user)
})


module.exports = router
