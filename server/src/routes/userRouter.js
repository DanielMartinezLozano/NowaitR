const express = require('express')
const userController = require('../controllers/userController')
const usersController = require('../controllers/usersController')

function userRouter (User) {
  const router = express.Router()
  const user = userController(User)
  const users = usersController(User)

  router.route('/')
    .get(users.getMethod)

  router.route('/:userId')
    .get(user.getMethod)
    .patch(user.patchMethod)
    .delete(user.deleteMethod)

  return router
}

module.exports = userRouter
