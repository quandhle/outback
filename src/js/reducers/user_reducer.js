import {SignIn} from '../constants/action-types';
import {SignOut} from '../constants/action-types';

const DEFAULT_STATE = {
    signed_in: false,
    cart_id: null
};

const userReducer = function (state = DEFAULT_STATE, action) {
    // if (action.type === SignIn.type) {
    //     return Object.assign({}, state, {
    //         user: state.user.concat(action.payload)
    //     })
    // };
    const {type, cart_id} = action;

    switch (action.type) {
        case "SignIn":
            return {
                signed_in: true,
                cart_id
            };
        case "SignOut":
            return {...DEFAULT_STATE}
        default:
            return state;
    }

    return state;
}

// function userReducer(state = DEFAULT_STATE, action) {
//     switch (action.type) {
//         case 'LOG_USER_IN':
//             return {...state, auth: true, username: action.username};
//         default:
//             return state;
//     }
// }

export default userReducer;
