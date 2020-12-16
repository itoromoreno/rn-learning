import {ADD_ACCOUNT} from '../actions/types';

const initialState = {
    ownerName: '',
    accounts: []
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ACCOUNT:
            return {
                ...state,
                accounts: state.accounts.concat({
                    key: Math.random(),
                    value: action.payload
                })
            }
        default:
            return state;
    }
}

export default accountReducer;
