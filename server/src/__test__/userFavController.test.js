/* eslint-disable node/no-callback-literal */
const User = require('../models/userModel')
const userFavController = require('../controllers/userFavController')(User)

describe('getMethod userFavController', () => {
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
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(false, {})
        })
      })
    })
    userFavController.getMethod(req, res)
    expect(res.json).toHaveBeenCalled()
  })

  test('should call response send on getMethod', async () => {
    User.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(true, {})
        })
      })
    })
    userFavController.getMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })
})

describe('patchMethod userFavController', () => {
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
        exec: jest.fn((callback) => {
          callback(true, {})
        })
      })
    })

    userFavController.patchMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })

  test('should call response send success on patchMethod adding quantity', async () => {
    User.findOne = jest.fn().mockReturnValueOnce({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn((callback) => {
          callback(false, { favs: [], save: jest.fn() })
        })
      })
    }).mockReturnValueOnce({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn((callback) => {
          callback(true, null)
        })
      })
    })

    await userFavController.patchMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })

  test('should call response send error on patchMethod sending the user', async () => {
    User.findOne = jest.fn().mockReturnValueOnce({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn((callback) => {
          callback(false, { favs: [], save: jest.fn() })
        })
      })
    }).mockReturnValueOnce({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn((callback) => {
          callback(false, null)
        })
      })
    })

    await userFavController.patchMethod(req, res)
    expect(res.json).toHaveBeenCalled()
  })
})

describe('deleteMethod userFavController', () => {
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
    User.findByIdAndUpdate = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn((callback) => {
          callback(true, {})
        })
      })
    })

    userFavController.deleteMethod(req, res)
    expect(res.send).toHaveBeenCalled()
  })

  test('should call response send success on deleteMethod substracting quantity', async () => {
    User.findByIdAndUpdate = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn((callback) => {
          callback(false, {})
        })
      })
    })

    userFavController.deleteMethod(req, res)
    expect(res.json).toHaveBeenCalled()
  })
})
