import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({ productsReducer, orderReducer });

export default rootReducer;
