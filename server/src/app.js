const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const {NODE_ENV, DB_CONNECTION_PROD, DB_CONNECTION_TEST} = require('./config/config')

const app = express()

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

if (NODE_ENV === 'test') {
  mongoose.connect(DB_CONNECTION_TEST)
} else {
  mongoose.connect(DB_CONNECTION_PROD)
}

if (NODE_ENV === 'test') {
  app.use(morgan('dev'))
}
app.use(bodyParser.json())
app.use(cors())

app.use('/', require('./routes/routes'))

module.exports = app
