const { Router } = require('express')
const User = require('../models/user')
const router = Router()


router.get('/', (req, res) => {
  res.send('Server')
})

router.post('/edit', async (req, res) => {
  const { name, info, phone, fav_games  } = req.body.inputs;
  let games = fav_games
  console.log(games);
  const { userId } = req.body;
  req.session.user = { ...req.session.user, name, userId, fav_games };
  const user = await User.findByIdAndUpdate(
    userId,
    {
      $set: {
        name,
        information: info,
        phone,
        fav_games: fav_games.concat(games).filter(
          (elem, index, self) =>
            self.findIndex((t) => {
              return t.x === elem.x && t.y === elem.y;
            }) === index
        ),
      },
    },
    null,
    () => {}
  );
  // console.log(user);
  res.json(user)
})


module.exports = router
