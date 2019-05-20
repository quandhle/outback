import {SignIn} from '../constants/action-types';
import {SignOut} from '../constants/action-types';

export function signIn (user) {
    localStorage.setItem('login', true);
    localStorage.setItem('name', user.name);
    localStorage.setItem('token', user.token);
    localStorage.setItem('user_id', user.user_id);
    localStorage.setItem('is_guest', false);

    return {
        type: SignIn.type,
    }
}

export function signOut (user) {
    localStorage.removeItem('login');
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.setItem('is_guest', true);

    return {
        type: SignOut.type
    };
}
