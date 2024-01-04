import { createStore, combineReducers } from 'redux';

const initialAccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

const initialCustomerState = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

function accountReducer(state = initialAccountState, action) {
  switch (action.type) {
    case 'account/deposit':
      return { ...state, balance: state.balance + action.payload };
    case 'account/withdraw':
      return { ...state, balance: state.balance - action.payload };
    case 'account/requestLoan':
      return {
        ...state,
        balance: state.balance + action.payload.loan,
        loan: state.loan + action.payload.loan,
        loanPurpose: action.payload.loanPurpose,
      };
    case 'account/payLoan':
      return { ...state, balance: state.balance - state.loan, loan: 0, loanPurpose: "" };
    default:
      return state;
  }
}

function customerReducer(state = initialCustomerState, action) {
  switch (action.type) {
    case 'customer/createCustomer':
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createAt,
      };
    case 'customer/updateName':
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// Account Action Creator
function deposit(amount) {
  return { type: 'account/deposit', payload: amount };
}

function withdraw(amount) {
  return { type: 'account/withdraw', payload: amount };
}

function requestLoan(loanAmount, loanPurpose) {
  return {
    type: 'account/requestLoan',
    payload: { loan: loanAmount, loanPurpose },
  };
}

function payLoan() {
  return { type: 'account/payLoan' };
}

// Customer Action Creator
function createCustomer(fullName, nationalID, createAt) {
  return {
    type: 'customer/createCustomer',
    payload: { fullName: fullName, nationalID: nationalID, createAt: createAt },
  };
}

function updateName(newName) {
  return { type: 'customer/updateName', payload: newName };
}

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