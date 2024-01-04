const initialAccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};

export default function accountReducer(state = initialAccountState, action) {
  switch (action.type) {
    case 'account/deposit':
      return { ...state, balance: state.balance + action.payload, isLoading: false };
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
    case 'account/converting':
      return {...state, isLoading: true};
    default:
      return state;
  }
}

// Account Action Creator
export function deposit(amount, currency) {
  if (currency === 'USD') return { type: 'account/deposit', payload: amount };

  return async function (dispatch, state) {
    dispatch(loading());
    
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const convertedAmount = data.rates.USD
    
    dispatch(deposit(convertedAmount, 'USD'));
  };
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

export function loading() {
  return {type: 'account/converting'}
}