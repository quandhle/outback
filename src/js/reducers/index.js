import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import userReducer from './user_reducer';
import CartCount from '../constants/action-types';

const DEFAULT_STATE = {
    cartCount: 0
}

const cartReducer = function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case "CartCount":
            return {
                cartCount
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    form: formReducer,
    user: userReducer,
    cart: cartReducer
});

export default rootReducer;
