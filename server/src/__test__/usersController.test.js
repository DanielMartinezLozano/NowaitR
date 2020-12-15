/* eslint-disable node/no-callback-literal */
const User = require('../models/userModel')
const usersController = require('../controllers/usersController')(User)

jest.mock('../models/userModel')

describe('usersController', () => {
  test('should call response json on getMethod', async () => {
    const res = {
      json: jest.fn()
    }
    User.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(false, {})
        })
      })
    })
    usersController.getMethod(null, res)
    expect(res.json).toHaveBeenCalled()
  })

  test('should call response send on getMethod', async () => {
    const res = {
      send: jest.fn()
    }

    User.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(true, {})
        })
      })
    })

    usersController.getMethod(null, res)

    expect(res.send).toHaveBeenCalled()
  })
})
