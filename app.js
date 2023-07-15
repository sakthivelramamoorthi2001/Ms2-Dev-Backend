const express = require('express')
const route = require('./src/routes/index')
const app = express()
const cors = require('cors')

app.use(cors())
app.options('*', cors());
app.use('/v1', route)



module.exports = app ;