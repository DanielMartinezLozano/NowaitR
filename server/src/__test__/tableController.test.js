/* eslint-disable node/no-callback-literal */
const User = require('../models/userModel')
const tableController = require('../controllers/tableController')(User)

describe('patchMethod tableController', () => {
  let res
  let req

  beforeEach(() => {
    res = {
      send: jest.fn(),
      json: jest.fn()
    }
    req = {
      params: {
        id: null
      },
      body: {
        table: 1
      }
    }
  })

  test('should call response send error on patchMethod', async () => {
    User.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn((callback) => {
          callback(true, {})
        })
      })
    })

    tableController.patchMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })

  test('should call response send success on patchMethod adding a table', async () => {
    User.findOne = jest.fn().mockReturnValueOnce({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn((callback) => {
          callback(false, { table: 0, save: jest.fn() })
        })
      })
    }).mockReturnValueOnce({
      exec: jest.fn((callback) => {
        callback(false, null)
      })
    })

    await tableController.patchMethod(req, res)
    expect(res.json).toHaveBeenCalled()
  })

  test('should call response send error on patchMethod', async () => {
    User.findOne = jest.fn().mockReturnValueOnce({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn((callback) => {
          callback(false, { table: 0, save: jest.fn() })
        })
      })
    }).mockReturnValueOnce({
      exec: jest.fn((callback) => {
        callback(true, null)
      })
    })

    await tableController.patchMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })
})
