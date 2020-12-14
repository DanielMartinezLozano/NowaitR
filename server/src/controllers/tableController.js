function tableController (User) {
  function patchMethod (req, res) {
    const table = req.body.table
    const query = { id: req.params.id }

    User.findOne(query)
      .populate('favs')
      .exec(
        async (error, success) => {
          if (error) {
            return res.send(error)
          } else {
            success.table = table
            await success.save()
            User.findOne(query).exec((error, success) => {
              if (error) {
                res.send(error)
              }
              res.json(success)
            })
          }
        })
  }

  return { patchMethod }
}

module.exports = tableController
