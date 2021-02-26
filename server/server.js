require('dotenv').config()
const http = require('http')
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
require('./config/passport-setup-vk')

const app = express()
const server = http.createServer(app)

// Mongo DB
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then((connect) => console.log("Success connect mongo"))

// MiddleWare
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('trust proxy', 1)
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.set('sessionName', 'sid')


// Mongo Session Store
const store = new MongoDBStore({
  uri: process.env.MONGO_DB,
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


//Routes
app.use('/', indexRoutes)
app.use('/user', userRoutes)
app.use('/event', eventRoutes)


//ws
const wsSerever = new WebSocket.Server({
  server,
});
// console.log(wsSerever);

wsSerever.on('connection', (ws) => {
  console.log('connect');
  ws.on('message', async (message) => {
    const { mess, chatId, userId } = JSON.parse(message)
    let newMess = new Message({ text: mess, user_ref: userId })
    const chat = await Chat.findById(chatId)
    chat.messages.push(newMess._id)
    await newMess.save()
    newMess = await Message.findById(newMess).populate('user_ref')
    await chat.save()

    wsSerever.clients.forEach((client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ newMess, chatId }))
      }
    }))
  })
})

wsSerever.on('close', () => {
  console.log('good bye');
});


//server listen port
server.listen(process.env.PORT ?? 3001, () => {
  console.log(`Server has been started on port ${process.env.PORT}`)
})
