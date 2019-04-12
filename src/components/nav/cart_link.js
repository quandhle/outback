import React from 'react';
import {Link} from 'react-router-dom';

export default props => {
    return (
        <Link to="/cart" className="cart-link">
            <i className="material-icons cart-icon">shopping_cart</i>
            <span className="side-nav-cart">View Cart</span>
            <span className="cart-items">{props.items}</span>
        </Link>
    )
}