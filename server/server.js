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

require('./config/passport-sutup')
require('./config/passport-setup-google')

const app = express()

// Mongo DB
mongoose.connect('mongodb://localhost:27017/abba', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  .then((connect) => console.log("Success connect mongo"))

// MiddleWare
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.set('trust proxy', 1)
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

//Routes
app.use('/', indexRoutes)
app.use('/user', userRoutes)
app.use('/event', eventRoutes)



app.listen(process.env.PORT ?? 3001, () => {
  console.log(`Server has been started on port ${process.env.PORT}`)
})
