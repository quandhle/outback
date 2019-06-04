import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import userReducer from './user_reducer';
import cartReducer from './cart_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    user: userReducer,
    cart: cartReducer
});

export default rootReducer;
