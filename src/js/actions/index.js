import {SignIn} from '../constants/action-types';
import {SignOut} from '../constants/action-types';
import {CartCount} from '../constants/action-types';
import axios from 'axios';

export function signIn (user) {
    localStorage.setItem('login', true);
    localStorage.setItem('last_name', user.last_name);
    localStorage.setItem('first_name', user.first_name);
    localStorage.setItem('token', user.token);
    localStorage.setItem('user_id', user.user_id);
    localStorage.setItem('cart_id', user.cart_id);
    localStorage.setItem('signed_in', true);
    localStorage.setItem('is_guest', false);

    return {
        type: SignIn.type,
        user
    }
}

export function signOut () {
    localStorage.removeItem('login');
    localStorage.removeItem('last_name');
    localStorage.removeItem('first_name');
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('cart_id');
    localStorage.setItem('signed_in', false);
    localStorage.setItem('is_guest', true);

    return {
        type: SignOut.type
    };
}

export function cartCount () {
    return function (dispatch) {
        axios.get('/api/getcartitemcount.php').then((resp) => {
            dispatch({
                type: CartCount.type,
                cartCount: resp.data.itemCount
            });
        })
    }
}

export function addToCart (info) {
    return function ({dispatch, info}) {
        console.log(dispatch);
        // axios.get(`/api/addcartitem.php?product_id=${productID}&quantity=${qty}`).then(resp => {
        //     const {cartCount, cartTotal} = resp.data; 

        //     this.setState({
        //         modalOpen: false,
        //         cartQty: cartCount,
        //         totalPrice: cartTotal
        //     });
        // });
    }
}
