/* eslint-disable node/no-callback-literal */
const Product = require('../models/productModel')
const productController = require('../controllers/productController')(Product)

describe('productController', () => {
  test('should call response json on getMethod', async () => {
    const res = {
      json: jest.fn()
    }

    const req = {
      params: {
        productId: null
      }
    }

    Product.findOne = jest.fn().mockReturnValue({
      exec: jest.fn().mockImplementationOnce((callback) => {
        callback(false, {})
      })
    })
    productController.getMethod(req, res)
    expect(res.json).toHaveBeenCalled()
  })

  test('should call response send on getMethod', async () => {
    const res = {
      send: jest.fn()
    }

    const req = {
      params: {
        productId: null
      }
    }

    Product.findOne = jest.fn().mockReturnValue({
      exec: jest.fn().mockImplementationOnce((callback) => {
        callback(true, {})
      })
    })
    productController.getMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })
})
