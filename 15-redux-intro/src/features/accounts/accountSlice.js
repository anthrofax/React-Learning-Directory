import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },

    withdraw(state, action) {
      if (state.balance < action.payload) return;

      state.balance -= action.payload;
    },

    requestLoan(state, action) {
      state.balance += action.payload.loanAmount;
      state.loan += action.payload.loanAmount;
      state.loanPurpose = action.payload.loanPurpose;
    },

    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = '';
    },
    convertingCurrency(state) {
      state.isLoading = true;
    }
  },
});

export const { withdraw, requestLoan, payLoan, convertingCurrency} = accountSlice.actions;

export function deposit(amount, currency) {
  if (currency === 'USD') return { type: 'account/deposit', payload: amount };

  return async function (dispatch, state) {
    dispatch(convertingCurrency());

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const convertedAmount = data.rates.USD
    
    dispatch(deposit(convertedAmount, 'USD'));
  };
}

export default accountSlice.reducer;
