import {createStore} from 'redux'

const initialValue = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}

function reducer(state = initialValue, action) {
    switch (action.type) {
        case 'account/deposit':
            return {...state, balance: state.balance + action.payload}
        case 'account/withdraw':
            return {...state, balance: state.balance - action.payload}
        case 'account/requestLoan':
            return {...state, balance: state.balance + action.payload.loan, loan: state.loan + action.payload.loan, loanPurpose: action.payload.loanPurpose}
        case 'account/payLoan':
            return {...state, balance: state.balance - state.loan, loan: 0};
        default:
            return state;
    }
}

function deposit(amount) {
    return {type: 'account/deposit', payload: amount}
}

const store = createStore(reducer);
store.dispatch(deposit(500));
console.log(store.getState())