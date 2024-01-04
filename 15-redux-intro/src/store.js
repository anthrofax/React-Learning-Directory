import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';
import { configureStore } from '@reduxjs/toolkit';

// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });

// export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
