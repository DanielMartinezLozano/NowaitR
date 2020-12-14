const express = require('express')
const userController = require('../controllers/userController')
const usersController = require('../controllers/usersController')
const authController = require('../controllers/authController')
const userFavController = require('../controllers/userFavController')
const tableController = require('../controllers/tableController')
const orderController = require('../controllers/orderController')

function userRouter (User) {
  const router = express.Router()
  const user = userController(User)
  const userFav = userFavController(User)
  const users = usersController(User)
  const auth = authController(User)
  const table = tableController(User)
  const order = orderController(User)

  router.route('/')
    .get(users.getMethod)

  router.route('/:userId')
    .get(user.getMethod)
    .patch(user.patchMethod)
    .delete(user.deleteMethod)

  router.route('/favs/:userId')
    .get(userFav.getMethod)
    .patch(userFav.patchMethod)
    .delete(userFav.deleteMethod)

  router.route('/auth')
    .post(auth.postMethod)

  router.route('/auth/:id')
    .get(auth.getMethod)

  router.route('/table/:id')
    .patch(table.patchMethod)

  router.route('/order/:id')
    .put(order.putMethod)
    .delete(order.deleteMethod)

  return router
}

module.exports = userRouter
