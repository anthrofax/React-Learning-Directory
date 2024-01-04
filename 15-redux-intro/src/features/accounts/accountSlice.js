const initialAccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

export default function accountReducer(state = initialAccountState, action) {
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
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: '',
      };
    default:
      return state;
  }
}

// Account Action Creator
export function deposit(amount) {
  return { type: 'account/deposit', payload: amount };
}

export function withdraw(amount) {
  return { type: 'account/withdraw', payload: amount };
}

export function requestLoan(loanAmount, loanPurpose) {
  return {
    type: 'account/requestLoan',
    payload: { loan: loanAmount, loanPurpose },
  };
}

export function payLoan() {
    return { type: 'account/payLoan' };
  }