const express = require('express')
const route = require('./src/routes/index')
const app = express()


app.use('/v1', route)

module.exports = app ;