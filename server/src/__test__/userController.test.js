/* eslint-disable node/no-callback-literal */
const User = require('../models/userModel')
const userController = require('../controllers/userController')(User)

describe('getMethod userController', () => {
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

  test('should call response json on getMethod', async () => {
    User.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          populate: jest.fn().mockReturnValue({
            exec: jest.fn().mockImplementationOnce((callback) => {
              callback(false, {})
            })
          })
        })
      })
    })
    userController.getMethod(req, res)
    expect(res.json).toHaveBeenCalled()
  })

  test('should call response send on getMethod', async () => {
    User.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          populate: jest.fn().mockReturnValue({
            exec: jest.fn().mockImplementationOnce((callback) => {
              callback(true, {})
            })
          })
        })
      })
    })
    userController.getMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })
})

describe('patchMethod userController', () => {
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

  test('should call response send error on patchMethod', async () => {
    User.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn((callback) => {
            callback(true, {})
          })
        })
      })
    })

    userController.patchMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })

  test('should call response send success on patchMethod adding quantity', async () => {
    User.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn((callback) => {
            callback(false, { saved: [{ product: { _id: 1 }, quantity: 0 }], save: jest.fn() })
          })
        })
      })
    })

    userController.patchMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })

  test('should call response send success on patchMethod pushing a product', async () => {
    User.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn((callback) => {
            callback(false, { saved: [{ product: { _id: 2 }, quantity: 0 }], save: jest.fn() })
          })
        })
      })
    })

    userController.patchMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })
})

describe('deleteMethod userController', () => {
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

    userController.deleteMethod(req, res)
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

    userController.deleteMethod(req, res)
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

    userController.deleteMethod(req, res)
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

    userController.deleteMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })
})
