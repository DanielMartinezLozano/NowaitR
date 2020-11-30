const express = require('express')
const debug = require('debug')('app')
const chalk = require('chalk')
const morgan = require('morgan')
const { connect } = require('mongoose')
const bodyParser = require('body-parser')
const User = require('./src/models/userModel')
const Product = require('./src/models/productModel')
// eslint-disable-next-line no-unused-vars
const Restaurant = require('./src/models/restaurantModel')
const productRouter = require('./src/routes/productRouter')(Product)
const userRouter = require('./src/routes/UserRouter')(User)

const app = express()
const port = process.env.PORT || 4500
const dataBaseURL = 'mongodb+srv://daniel:admin@nowaitr.w6gix.mongodb.net/NowaitR?retryWrites=true&w=majority'
connect(dataBaseURL, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(morgan('tiny'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/users', userRouter)

app.use('/products', productRouter)

app.listen(port, () => {
  debug(`Server running on port ${chalk.blue(port)}`)
})
