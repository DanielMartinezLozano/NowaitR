function authController (User) {
  function postMethod (req, res) {
    const query = { id: req.body.id }
    User.findOneAndUpdate(query, req.body, { upsert: true, new: true, useFindAndModify: false })
      .populate('favs')
      .populate('saved.product')
      .populate('sent.product')
      .exec((error, user) => { error ? res.send(error) : res.json(user) })
  }

  function getMethod (req, res) {
    const query = { id: req.params.id }
    User.findOne(query)
      .populate('favs')
      .populate('saved.product')
      .populate('sent.product')
      .exec((error, user) => { error ? res.send(error) : res.json(user) })
  }

  return { postMethod, getMethod }
}

module.exports = authController
