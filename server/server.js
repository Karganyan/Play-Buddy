require('dotenv').config()
const path = require('path')
const express = require('express')
const passport = require('passport')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const mongoose = require('mongoose')
const cors = require('cors')
const indexRoutes = require('./routes/indexRoutes')

const app = express()

// Mongo DB
mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true})

// MiddleWare
app.use(express.urlencoded({extended: false}))
app.use(express.json())
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
  secret: process.env.SECRET_KEY,
  name: app.get('sessionName'),
  resave: false,
  store: store,
  saveUninitialized: false,
  cookie: { secure: false }
}))

//Routes
app.use('/', indexRoutes)

console.log(process.env.MONGO_DB);

app.listen(process.env.PORT ?? 3001, () => {
  console.log(`Server has been started on port ${process.env.PORT}`)
})

