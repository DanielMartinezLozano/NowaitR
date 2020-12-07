import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import orderReducer from './orderReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({ productsReducer, orderReducer, authReducer });

export default rootReducer;
