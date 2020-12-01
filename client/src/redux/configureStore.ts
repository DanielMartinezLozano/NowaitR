/* eslint-disable no-undefined */
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

export default function configureStore (initialState = {} || undefined) {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk))
  )
}
