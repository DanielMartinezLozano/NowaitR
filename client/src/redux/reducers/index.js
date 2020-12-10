import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import orderReducer from './orderReducer';
import authReducer from './authReducer';
import favsReducer from './favsReducer';

const rootReducer = combineReducers({
  productsReducer, orderReducer, authReducer, favsReducer,
});

export default rootReducer;
