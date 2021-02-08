require('dotenv').config()
const path = require('path')
const express = require('express')
const passport = require('passport')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const mongoose = require('mongoose')
const cors = require('cors')
const indexRoutes = require('./routes/indexRoutes')
const userRoutes = require('./routes/userRoutes')
const eventRoutes = require('./routes/eventRoutes')
const WebSocket = require('ws');
const Message = require('./models/message')
const Chat = require('./models/chat')


require('./config/passport-sutup')
require('./config/passport-setup-google')

const app = express()
const wsSerever = new WebSocket.Server({ port: 1234 });




// Mongo DB
mongoose.connect('mongodb://localhost:27017/abba', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then((connect) => console.log("Success connect mongo"))

// MiddleWare
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set('trust proxy', 2)
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.set('sessionName', 'sid')


// Mongo Session Store
const store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/abba',
  collection: 'mySessions'
})

// Session
app.use(session({
  store: store,
  secret: process.env.SECRET_KEY,
  name: app.get('sessionName'),
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))

// MiddleWare Passport
app.use(passport.initialize())
app.use(passport.session())

//ws
wsSerever.on('connection', (client) => {
  client.on('message', async (message) => {
    const { mess, chatId, userId } = JSON.parse(message)
    const newMess = new Message({ text: mess, user_ref: userId })
    const chat = await Chat.findById(chatId)
    chat.messages.push(newMess._id)
    await newMess.save()
    await chat.save()
    wsSerever.clients.forEach((thisClient => {
      thisClient.send(JSON.stringify({ newMess, chatId }))
    }))
  })
})


//Routes
app.use('/', indexRoutes)
app.use('/user', userRoutes)
app.use('/event', eventRoutes)

wsSerever.on('close', () => {
  console.log('good bye');
});
app.listen(process.env.PORT ?? 3001, () => {
  // console.log(`Server has been started on port ${process.env.PORT}`)
})
