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

  /*   function postMethod (req, res) {
    const user = req.body
    User.create(user, (error, newUser) => {
      if (error) {
        res.send(error)
      } else {
        res.send(newUser)
      }
    })
  } */

  return { postMethod }
}

module.exports = authController
