function orderController (User) {
  function putMethod (req, res) {
    const query = { id: req.params.id }

    User.findOne(query)
      .populate('saved.product')
      .populate('sent.product')
      .exec(
        (error, success) => {
          if (error) {
            return res.send(error)
          }
          success.sent = [...success.sent, ...success.saved]
          success.saved = []
          success.save()
          res.send(success)
        })
  }

  return { putMethod }
}

module.exports = orderController
