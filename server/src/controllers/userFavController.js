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
            User.findOne(query).populate('favs').exec((error, success) => {
              if (error) {
                res.send(error)
              }
              res.json(success)
            })
          }
        })
  }

  function deleteMethod (req, res) {
    const productId = req.body._id
    const query = { id: req.params.userId }

    User.findOne(query)
      .populate('saved.product')
      .exec((error, success) => {
        if (error) {
          return res.send(error)
        }
        const productFound = success.favs.find((productFound) => productFound._id.toString() === productId)
        if (productFound) {
          const index = success.favs.indexOf(productFound)
          success.saved.splice(index, 1)
        }
        success.save()
        res.send(success)
      })
  }

  return { getMethod, patchMethod, deleteMethod }
}

module.exports = userFavController
