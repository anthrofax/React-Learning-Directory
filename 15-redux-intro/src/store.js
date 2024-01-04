import { createStore, combineReducers } from 'redux';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';
import { deposit, withdraw, requestLoan, payLoan } from './features/accounts/accountSlice';
import { createCustomer, updateName } from './features/customers/customerSlice';

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

// TEST ACCOUNT
store.dispatch(deposit(500));
console.log(store.getState());
store.dispatch(withdraw(200));
console.log(store.getState());
store.dispatch(requestLoan(1000, 'Beli Macbook'));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

// TEST CUSTOMER
store.dispatch(
  createCustomer('Afridho Ikhsan', '2210631170002', '24 April 2004')
);
console.log(store.getState());
store.dispatch(updateName('Edo'));
console.log(store.getState());
