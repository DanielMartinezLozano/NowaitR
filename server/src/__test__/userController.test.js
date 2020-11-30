/* eslint-disable node/no-callback-literal */
const User = require('../models/userModel')
const userController = require('../controllers/userController')(User)

describe('userController', () => {
  test('should call response json on getMethod', async () => {
    const res = {
      json: jest.fn()
    }

    const req = {
      params: {
        userId: null
      }
    }

    User.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementationOnce((callback) => {
            callback(false, {})
          })
        })
      })
    })
    userController.getMethod(req, res)
    expect(res.json).toHaveBeenCalled()
  })

  test('should call response send on getMethod', async () => {
    const res = {
      send: jest.fn()
    }

    const req = {
      params: {
        userId: null
      }
    }

    User.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementationOnce((callback) => {
            callback(true, {})
          })
        })
      })
    })
    userController.getMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })
})
