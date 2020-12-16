import { createStore, combineReducers } from 'redux';
import accountReducer from './reducers/accountReducer';

const rootReducer = combineReducers({
    accounts: accountReducer
})

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;
