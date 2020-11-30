function productController (Product) {
  function getMethod (req, res) {
    Product.findOne({ _id: req.params.productId })
      .exec((errorFindProduct, product) => (errorFindProduct
        ? res.send(errorFindProduct)
        : res.json(product)))
  }

  return { getMethod }
}

module.exports = productController
