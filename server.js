const express = require('express')
const mongoose = require('mongoose')
const api = require('./server/routes/api')
const path = require('path')

const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

mongoose.connect('mongodb://localhost:27017/transactionsDB', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

app.use('/', api)

const PORT = 4200
app.listen(PORT, () => {
  console.log(`Up and running on ${PORT}`)
})