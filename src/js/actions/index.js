import {SignIn} from '../constants/action-types';

export function signIn () {
    return {
        type: SignIn,
        name: "Guest"
    }
}
