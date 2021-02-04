require('dotenv').config()
const path = require('path')
const express = require('express')
const passport = require('passport')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const mongoose = require('mongoose')
const cors = require('cors')
const indexRoutes = require('./routes/indexRoutes')
const authRoutes = require('./routes/authRoutes')
require('./config/passport-sutup')

const app = express()

// Mongo DB
mongoose.connect('mongodb://localhost:27017/abba', {useNewUrlParser: true, useUnifiedTopology: true})
  .then((connect) => console.log("Success connect mongo"))

// MiddleWare
app.use((req, res, next) => {
  res.header('Access-control-allow-origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Content-type')
  next()
})
app.use(express.urlencoded({extended: false}))
app.use(express.json())
// app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.set('sessionName', 'sid')
app.use(passport.initialize())
app.use(passport.session())

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

//Routes
app.use('/', indexRoutes)
app.use('/auth', authRoutes)



app.listen(process.env.PORT ?? 3001, () => {
  console.log(`Server has been started on port ${process.env.PORT}`)
})
