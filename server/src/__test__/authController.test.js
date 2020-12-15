/* eslint-disable node/no-callback-literal */
const User = require('../models/userModel')
const authController = require('../controllers/authController')(User)

jest.mock('../models/userModel')

describe('authController getMethod', () => {
  test('should call response json on getMethod', async () => {
    const res = {
      json: jest.fn()
    }
    const req = {
      params: {
        sub: null
      }
    }

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
    authController.getMethod(req, res)
    expect(res.json).toHaveBeenCalled()
  })

  test('should call response send on getMethod', async () => {
    const res = {
      send: jest.fn()
    }
    const req = {
      params: {
        sub: null
      }
    }

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

    authController.getMethod(req, res)

    expect(res.send).toHaveBeenCalled()
  })
})

describe('authController postMethod', () => {
  test('should call response json on postMethod', async () => {
    const res = {
      send: jest.fn()
    }
    const req = {
      body: {}
    }

    User.findOneAndUpdate = jest.fn().mockReturnValue({
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

    authController.postMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })

  test('should call response send on postMethod', async () => {
    const res = {
      json: jest.fn()
    }
    const req = {
      body: {}
    }

    User.findOneAndUpdate = jest.fn().mockReturnValue({
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

    authController.postMethod(req, res)
    expect(res.json).toHaveBeenCalled()
  })
})
