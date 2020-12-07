function authController (User) {
  function getMethod (req, res) {
    User.findOne({ sub: req.params.sub })
      .populate('favs')
      .populate('restaurant')
      .populate('saved.product')
      .populate('sent')
      .exec((errorFindUser, user) => (errorFindUser
        ? res.send(errorFindUser)
        : res.json(user)))
  }

  function postMethod (req, res) {
    const user = req.body
    const createCallBack = (error, newUser) => {
      if (error) {
        res.send(error)
      } else {
        res.send(newUser)
      }
    }
    User.create(user, createCallBack)
  }

  return { getMethod, postMethod }
}

module.exports = authController
