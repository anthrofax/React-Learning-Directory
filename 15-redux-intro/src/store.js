import { createStore, combineReducers, applyMiddleware } from 'redux';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

import {thunk} from 'redux-thunk'

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));