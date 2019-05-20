import {SignIn} from '../constants/action-types';
import {SignOut} from '../constants/action-types';

const DEFAULT_STATE = {
    signed_in: false,
    cart_id: null,
    is_guest: true
};

const userReducer = function (state = DEFAULT_STATE, action) {
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

export default userReducer;
