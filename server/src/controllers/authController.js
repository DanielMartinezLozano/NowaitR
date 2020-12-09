function authController (User) {
  function postMethod (req, res) {
    const query = { id: req.body.id }
    User.findOneAndUpdate(query, req.body, { upsert: true, useFindAndModify: false })
      .populate('favs')
      .populate('restaurant')
      .populate('saved.product')
      .populate('sent')
      .exec((error, newUser) => { error ? res.send(error) : res.json(newUser) })
  }

  function getMethod (req, res) {
    const query = { id: req.params.id }
    User.findOne(query)
      .populate('favs')
      .populate('restaurant')
      .populate('saved.product')
      .populate('sent')
      .exec((error, user) => { error ? res.send(error) : res.json(user) })
  }

  return { postMethod, getMethod }
}

module.exports = authController
