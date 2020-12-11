/* eslint-disable node/no-callback-literal */
const Product = require('../models/productModel')
const productsController = require('../controllers/productsController')(Product)

describe('productsController', () => {
  test('should call response json on getMethod', async () => {
    const res = {
      json: jest.fn()
    }
    const req = {
      params: { category: null }
    }

    Product.find = jest.fn().mockReturnValue({
      exec: jest.fn().mockImplementationOnce((callback) => {
        callback(false, {})
      })
    })
    productsController.getMethod(req, res)
    expect(res.json).toHaveBeenCalled()
  })

  test('should call response send on getMethod', async () => {
    const res = {
      send: jest.fn()
    }
    const req = {
      params: { category: null }
    }

    Product.find = jest.fn().mockReturnValue({
      exec: jest.fn().mockImplementationOnce((callback) => {
        callback(true, {})
      })
    })
    productsController.getMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })
})
