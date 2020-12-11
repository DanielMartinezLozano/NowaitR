const express = require('express')
const productController = require('../controllers/productController')
const productsController = require('../controllers/productsController')

function productRouter (Product) {
  const router = express.Router()
  const product = productController(Product)
  const products = productsController(Product)

  router.route('/:category')
    .get(products.getMethod)

  router.route('/:productId')
    .get(product.getMethod)

  return router
}

module.exports = productRouter
