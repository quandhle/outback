import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
// import userReducer from './user_reducer';
import {SignIn} from '../constants/action-types';

const initialState = {
    user: {}
};

// const rootReducer = combineReducers({
//     form: formReducer,
//     user: userReducer
// });

const rootReducer = (state = initialState, action) => {
    if (action.type === "Sign In") {
        return Object.assign({}, state, {
            user: state.user.concat(action.payload)
        })
    };

    return state;
}

export default rootReducer;
