import { createStore, combineReducers, applyMiddleware } from 'redux';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';
import {composeWithDevTools} from '@redux-devtools/extension'

import {thunk} from 'redux-thunk'

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));