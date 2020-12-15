function userFavController (User) {
  function getMethod (req, res) {
    const query = { id: req.params.userId }
    User.findOne(query)
      .populate('favs')
      .exec((error, user) => { error ? res.send(error) : res.json(user.favs) })
  }

  function patchMethod (req, res) {
    const productId = req.body._id
    const query = { id: req.params.userId }

    User.findOne(query)
      .populate('favs')
      .exec(
        async (error, success) => {
          if (error) {
            return res.send(error)
          } else {
            success.favs.push(productId)
            await success.save()
            User.findOne(query).populate('favs').exec((err, succ) => {
              if (err) {
                res.send(err)
              } else {
                res.json(succ)
              }
            })
          }
        })
  }
  function deleteMethod (req, res) {
    const query = req.params.userId
    const productId = req.body._id
    const update = { $pull: { favs: productId } }

    User.findByIdAndUpdate(query, update, { new: true })
      .populate('favs')
      .exec((error, success) => {
        if (error) {
          return res.send(error)
        } else {
          return res.json(success)
        }
      })
  }

  return { getMethod, patchMethod, deleteMethod }
}

module.exports = userFavController
