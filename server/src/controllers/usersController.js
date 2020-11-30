function usersController (User) {
  function getMethod (req, res) {
    User.find({ })
      .populate('favs')
      .populate('restaurant')
      .exec((errorFindUser, user) => (errorFindUser
        ? res.send(errorFindUser)
        : res.json(user)))
  }

  return { getMethod }
}

module.exports = usersController
