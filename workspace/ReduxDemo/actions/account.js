import {ADD_ACCOUNT} from './types';

export const addAccount = accountOwner => {
    return {
        type: ADD_ACCOUNT,
        payload: accountOwner
    }
}
