const initialCustomerState = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

export default function customerReducer(state = initialCustomerState, action) {
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

// Customer Action Creator
export function createCustomer(fullName, nationalID, createAt) {
  return {
    type: 'customer/createCustomer',
    payload: { fullName: fullName, nationalID: nationalID, createAt: createAt },
  };
}

export function updateName(newName) {
  return { type: 'customer/updateName', payload: newName };
}
