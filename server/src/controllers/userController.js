function userController (User) {
  function getMethod (req, res) {
    User.findOne({ _id: req.params.userId })
      .populate('favs')
      .populate('restaurant')
      .exec((errorFindUser, user) => (errorFindUser
        ? res.send(errorFindUser)
        : res.json(user)))
  }

  return { getMethod }
}

module.exports = userController
