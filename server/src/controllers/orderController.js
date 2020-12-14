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
          success.saved.map((savedProduct) => {
            const sameProduct = success.sent.find(
              (sentProduct) => sentProduct.product.name === savedProduct.product.name)
            sameProduct ? sameProduct.quantity += 1 : success.sent.push(savedProduct)
            return null
          })
          success.saved = []
          success.save()
          res.send(success)
        })
  }

  function deleteMethod (req, res) {
    const query = { id: req.params.id }

    User.findOne(query)
      .populate('saved.product')
      .populate('sent.product')
      .exec(
        (error, success) => {
          if (error) {
            return res.send(error)
          }
          success.saved = []
          success.sent = []
          success.save()
          res.send(success)
        })
  }

  return { putMethod, deleteMethod }
}

module.exports = orderController
