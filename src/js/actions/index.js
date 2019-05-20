import {SignIn} from '../constants/action-types';
import {SignOut} from '../constants/action-types';

export function signIn (SignIn) {
    // localStorage.setItem({
    //     'signedIn': 'false',
    //     'token': user.token,
    //     'user_id': user.user_id,
    //     'cart_id': user.cart_id
    // });

    return {
        type: SignIn.type,
    }
}

export function signOut (SignOut) {
    localStorage.removeItem('signedIn');
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('cart_id');

    return {
        type: SignOut.type
    };
}
