function productsController (Product) {
  function getMethod (req, res) {
    Product.find({ })
      .exec((errorFindProduct, product) => (errorFindProduct
        ? res.send(errorFindProduct)
        : res.json(product)))
  }

  return { getMethod }
}

module.exports = productsController
