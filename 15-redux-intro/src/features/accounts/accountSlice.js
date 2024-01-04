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
  },
});

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;
export default accountSlice.reducer;
