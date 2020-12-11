function productsController (Product) {
  function getMethod (req, res) {
    const query = { category: req.params.category }
    Product.find(query)
      .exec((errorFindProduct, products) => (errorFindProduct
        ? res.send(errorFindProduct)
        : res.json(products)))
  }

  return { getMethod }
}

module.exports = productsController
