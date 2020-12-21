const express = require('express')
const debug = require('debug')('app')
const chalk = require('chalk')
const cors = require('cors')
const morgan = require('morgan')
const { connect } = require('mongoose')
const bodyParser = require('body-parser')
const User = require('./src/models/userModel')
const Product = require('./src/models/productModel')
const productRouter = require('./src/routes/productRouter')(Product)
const userRouter = require('./src/routes/UserRouter')(User)
require('dotenv').config()

const app = express()
app.use(cors())
const port = process.env.PORT || 4500
const dataBaseURL = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@nowaitr.w6gix.mongodb.net/NowaitR?retryWrites=true&w=majority`
connect(dataBaseURL, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(morgan('tiny'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/users', userRouter)

app.use('/products', productRouter)

app.listen(port, () => {
  debug(`Server running on port ${chalk.blue(port)}`)
})
