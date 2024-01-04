import { createSlice } from '@reduxjs/toolkit';

function formatTime(date) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date);
}

const initialState = {
  fullName: '',
  nationalId: '',
  createdAt: '',
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    createCustomer(state, action) {
      state.fullName = action.payload.fullName;
      state.nationalId = action.payload.nationalId;
      state.createdAt = formatTime(new Date());
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;
