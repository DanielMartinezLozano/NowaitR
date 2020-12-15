/* eslint-disable node/no-callback-literal */
const User = require('../models/userModel')
const orderController = require('../controllers/orderController')(User)

describe('putMethod orderController', () => {
  let res
  let req

  beforeEach(() => {
    res = {
      send: jest.fn(),
      json: jest.fn()
    }
    req = {
      params: {
        userId: null
      }
    }
  })

  test('should call response send error on putMethod', async () => {
    User.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn((callback) => {
            callback(true, {})
          })
        })
      })
    })

    orderController.putMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })

  test('should call response send success on putMethod adding quantity', async () => {
    User.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn((callback) => {
            callback(false, { saved: [{ product: { _id: 1 }, quantity: 1 }], sent: [{ product: { _id: 1 }, quantity: 1 }], save: jest.fn() })
          })
        })
      })
    })

    orderController.putMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })

  test('should call response send success on putMethod pushing a product', async () => {
    User.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn((callback) => {
            callback(false, { saved: [{ product: { _id: 2 }, quantity: 0 }], sent: [], save: jest.fn() })
          })
        })
      })
    })

    orderController.putMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })
})

describe('deleteMethod orderController', () => {
  let res
  let req

  beforeEach(() => {
    res = {
      send: jest.fn(),
      json: jest.fn()
    }
    req = {
      params: {
        userId: null
      },
      body: {
        _id: '1'
      }
    }
  })

  test('should call response send error on deleteMethod', async () => {
    User.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn((callback) => {
            callback(true, {})
          })
        })
      })
    })

    orderController.deleteMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })

  test('should call response send success on deleteMethod substracting quantity', async () => {
    User.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn((callback) => {
            callback(false, { saved: [{ product: { _id: 1 }, quantity: 1 }], save: jest.fn() })
          })
        })
      })
    })

    orderController.deleteMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })

  test('should call response send success on deleteMethod removing a product', async () => {
    User.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn((callback) => {
            callback(false, { saved: [{ product: { _id: 1 }, quantity: 2 }], save: jest.fn() })
          })
        })
      })
    })

    orderController.deleteMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })

  test('should call response send error on deleteMethod not finding a product', async () => {
    User.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn((callback) => {
            callback(false, { saved: [], save: jest.fn() })
          })
        })
      })
    })

    orderController.deleteMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })
})
